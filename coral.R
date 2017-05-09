setwd(dirname(rstudioapi::getActiveDocumentContext()$path))
suppressMessages({
  library(dplyr)
  library(reshape2)
  library(ggplot2)
  library(readr)
  library(ggthemes)
  library(caTools)
  library(purrr)
})

############## load datasets ############## 
bleaching_data   <- read.csv('data/CoralBleaching.csv', stringsAsFactors=FALSE, fileEncoding="latin1", na.strings = "")
diseases_data  <- read.csv('data/CoralDiseases.csv', stringsAsFactors=FALSE, fileEncoding="latin1")
protected_areas_data  <- read.csv('data/MarineProtectedAreas.csv', stringsAsFactors=FALSE, fileEncoding="latin1")
reef_locations_data <- read.csv('data/ReefLocations.csv', stringsAsFactors=FALSE, fileEncoding="latin1")

# change country codes to 3 characters
country_bin <- function(country_code) {
  country_code %>%
    map_chr(function(code) {
      if (grepl("AUS_GBR|AUS_NOR|AUS_WES", code)) {
        return("AUS")
      }
      if (grepl("IDN_SULA", code)) {
        return("IDN")
      }
      if (grepl("MEX_CRB|MEX_PAC", code)) {
        return("MEX")
      }
      if (grepl("MYS_BOR|MYS_PEN", code)) {
        return("MYS")
      }
      if (grepl("TZA_ZAN", code)) {
        return("ZAN")
      }
      if (grepl("UMI_BHD|UMI_PAL", code)) {
        return("UMI")
      }
      if (grepl("USA_FLO|USA_HAW", code)) {
        return("USA")
      }
      if (grepl("VIR_CRO|VIR_JOH", code)) {
        return("VIR")
      }
      if (grepl("YEM_ADE", code)) {
        return("YEM")
      }
      if (grepl("GBR_CHA", code)) {
        return("GBR")
      }
      if (grepl("PAN_ATL", code)) {
        return("PAN")
      }
      code
    })
}

# make severity codes consistent
severity_bin <- function(severity) {
  severity %>%
    map_chr(function(code) {
      if (grepl("Low", code)) {
        return("LOW")
      }
      if (grepl("Medium", code)) {
        return("MEDIUM")
      }
      if (grepl("No Bleaching", code)) {
        return("NONE")
      }
      if (grepl("Severity Unknown", code)) {
        return("UNKNOWN")
      }
      code
    })
}

# filter columns and mutate country code/severity
bleaching_data %>% 
  filter(!grepl("West Dog",LOCATION)) %>% 
  select(YEAR, COUNTRY, COUNTRY_CODE, LOCATION, LAT, LON, BLEACHING_SEVERITY, REMARKS, SOURCE) %>% 
  mutate(CODE = country_bin(COUNTRY_CODE)) %>%
  mutate(SEVERITY = severity_bin(BLEACHING_SEVERITY)) %>% 
  filter(abs(LAT) < 200) %>% 
  filter(abs(LON) < 200) %>%
  select(-COUNTRY_CODE, -BLEACHING_SEVERITY) -> bleaching
# NAs: remarks (3103); location(123)

# create csvs for each year
write.csv(bleaching %>% filter(grepl("196", YEAR)), "data/clean/bleaching_data1960.csv", row.names = FALSE)
write.csv(bleaching %>% filter(grepl("196|197", YEAR)), "data/clean/bleaching_data1970.csv", row.names = FALSE)
write.csv(bleaching %>% filter(grepl("196|197|198", YEAR)), "data/clean/bleaching_data1980.csv", row.names = FALSE)
write.csv(bleaching %>% filter(grepl("196|197|198|199", YEAR)), "data/clean/bleaching_data1990.csv", row.names = FALSE)
write.csv(bleaching %>% filter(grepl("196|197|198|199|200", YEAR)), "data/clean/bleaching_data2000.csv", row.names = FALSE)
write.csv(bleaching %>% filter(grepl("196|197|198|199|200|201", YEAR)), "data/clean/bleaching_data2010.csv", row.names = FALSE)
# create cvs for severity levels
write.csv(bleaching %>% filter(SEVERITY == "HIGH"), "data/clean/bleaching_data1.csv", row.names = FALSE)
write.csv(bleaching %>% filter(SEVERITY == "MEDIUM"), "data/clean/bleaching_data2.csv", row.names = FALSE)
write.csv(bleaching %>% filter(SEVERITY == "LOW"), "data/clean/bleaching_data3.csv", row.names = FALSE)

