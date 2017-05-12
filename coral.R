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
bleaching_data   <- read.csv('data/raw/CoralBleaching.csv', stringsAsFactors=FALSE, fileEncoding="latin1", na.strings = "")
diseases_data  <- read.csv('data/raw/CoralDiseases.csv', stringsAsFactors=FALSE, fileEncoding="latin1", na.strings = "")
protected_areas_data  <- read.csv('data/raw/MarineProtectedAreas.csv', stringsAsFactors=FALSE, fileEncoding="latin1")
reef_locations_data <- read.csv('data/raw/ReefLocations.csv', stringsAsFactors=FALSE, fileEncoding="latin1")

############## coral bleaching site analysis ############## 

# change country codes to 3 characters
country_bin <- function(country_code) {
  country_code %>%
    map_chr(function(code) {
      if (grepl("ANT_L|ANT_W", code)) {
        return("ANT")
      }
      if (grepl("AUS_GBR|AUS_NOR|AUS_WES", code)) {
        return("AUS")
      }
      if (grepl("HND_PAC", code)) {
        return("HND")
      }
      if (grepl("IDN_SULA", code)) {
        return("IDN")
      }
      if (grepl("MEX_CRB|MEX_PAC", code)) {
        return("MEX")
      }
      if (grepl("MYS_BOR|MYS_PEN|MyS", code)) {
        return("MYS")
      }
      if (grepl("phl", code)) {
        return("PHL")
      }
      if (grepl("TZA_ZAN", code)) {
        return("ZAN")
      }
      if (grepl("UMI_BHD|UMI_PAL", code)) {
        return("UMI")
      }
      if (grepl("USA_FLO|USA_HAW|usa_flo", code)) {
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
  select(YEAR, COUNTRY, COUNTRY_CODE, LOCATION, LAT, LON, BLEACHING_SEVERITY, REMARKS) %>% 
  mutate(CODE = country_bin(COUNTRY_CODE)) %>%
  mutate(SEVERITY = severity_bin(BLEACHING_SEVERITY)) %>% 
  filter(abs(LAT) < 200) %>% 
  filter(abs(LON) < 200) %>%
  filter(!grepl("UNKNOWN",SEVERITY)) %>% 
  filter(!grepl("NONE",SEVERITY)) %>% 
  select(-COUNTRY_CODE, -BLEACHING_SEVERITY) -> bleaching
# NAs: remarks (3103); location(123)

# create csvs for each year
write.csv(bleaching %>% filter(grepl("196|197", YEAR)), "data/clean/bleach/bleaching_data1970.csv", row.names = FALSE)
write.csv(bleaching %>% filter(grepl("196|197|198", YEAR)), "data/clean/bleach/bleaching_data1980.csv", row.names = FALSE)
write.csv(bleaching %>% filter(grepl("196|197|198|199", YEAR)), "data/clean/bleach/bleaching_data1990.csv", row.names = FALSE)
write.csv(bleaching %>% filter(grepl("196|197|198|199|200", YEAR)), "data/clean/bleach/bleaching_data2000.csv", row.names = FALSE)
write.csv(bleaching %>% filter(grepl("196|197|198|199|200|201", YEAR)), "data/clean/bleach/bleaching_data2010.csv", row.names = FALSE)
# create cvs for severity levels
write.csv(bleaching %>% filter(SEVERITY == "HIGH"), "data/clean/bleaching_data1.csv", row.names = FALSE)
write.csv(bleaching %>% filter(SEVERITY == "MEDIUM"), "data/clean/bleaching_data2.csv", row.names = FALSE)
write.csv(bleaching %>% filter(SEVERITY == "LOW"), "data/clean/bleaching_data3.csv", row.names = FALSE)

############## coral disease site analysis ############## 

# make coral diseases consistent
diseases_bin <- function(diseases) {
  diseases %>%
    map_chr(function(code) {
      if (grepl("Coral hyperplasia|Coral tumours|Neoplasia|Ulcerative White spot disease", code)) {
        return("Coral Tumors")
      }
      if (grepl("aspergillosis|Aspergillosis|Atramentous necrosis|Bacterial bleaching|Fungal disease|Patchy necrosis/ white pox|Trematodiosis", code)) {
        return("Fungal/Bacterial Disease")
      }
      if (grepl("Band disease|Black-band Disease|Black-band disease|Blue-band disease|Brown Band|Red Band disease II|Red-band disease|Skeleton eroding band|White band|White Band|White band disease type I|White-band disease|White syndrome|Yellow band disease", code)) {
        return("Band Disease")
      }
      if (grepl("White plague type I|White plague type II|White plague|Plague", code)) {
        return("Plague Disease")
      }
      if (grepl("Black and white purple spot|Black and White purple spot|Black and white syndrome|Black blotch|Dark-spot disease|Pink spot|Purple spot", code)) {
        return("Spot Disease")
      }
      if (grepl("Parrot fish predation|Rapid wasting disease|Shut down reaction", code)) {
        return("Stress/Predation")
      }
      if (grepl("Algae disease|Coralline Lethal Disease", code)) {
        return("Algae Disease")
      }
      if (grepl("unknown|Disease unspecified|Cayo Timon", code)) {
        return("Unknown")
      }
      code
    })
}

diseases_data %>% 
  select(DISEASE_TYPE, YEAR, LAT, LON, COUNTRY_CODE, COUNTRY, REMARKS) %>% 
  filter(!is.na(DISEASE_TYPE)) %>% 
  filter(!is.na(YEAR)) %>%
  filter(!is.na(LAT)) %>%
  filter(!is.na(LON)) %>%
  filter(!is.na(COUNTRY_CODE)) %>%
  filter(!is.na(COUNTRY)) %>% 
  mutate(CODE = country_bin(COUNTRY_CODE)) %>% 
  filter(abs(LAT) < 200) %>% 
  filter(abs(LON) < 200) %>% 
  filter(YEAR > 1969) %>% 
  filter(!grepl("No disease",DISEASE_TYPE)) %>% 
  mutate(DISEASE = diseases_bin(DISEASE_TYPE)) %>% 
  filter(!grepl("Unknown",DISEASE)) %>% 
  select(-COUNTRY_CODE, -DISEASE_TYPE) -> diseases


bleaching %>% filter(grepl("196|197|198|199|200|201", YEAR)) %>% select(-LOCATION) %>% 
  select(YEAR, LAT, LON, COUNTRY, REMARKS, CODE, SEVERITY) -> bleach
colnames(diseases) <- c("YEAR", "LAT", "LON", "COUNTRY", "REMARKS", "CODE", "SEVERITY")


# create cvs for diseases
write.csv(diseases %>% filter(SEVERITY == "Algae Disease") %>% bind_rows(bleach), "data/clean/diseases_data1.csv", row.names = FALSE)
write.csv(diseases %>% filter(SEVERITY == "Band Disease") %>% bind_rows(bleach), "data/clean/diseases_data2.csv", row.names = FALSE)
write.csv(diseases %>% filter(SEVERITY == "Coral Tumors") %>% bind_rows(bleach), "data/clean/diseases_data3.csv", row.names = FALSE)
write.csv(diseases %>% filter(SEVERITY == "Fungal/Bacterial Disease") %>% bind_rows(bleach), "data/clean/diseases_data4.csv", row.names = FALSE)
write.csv(diseases %>% filter(SEVERITY == "Plague Disease") %>% bind_rows(bleach), "data/clean/diseases_data5.csv", row.names = FALSE)
write.csv(diseases %>% filter(SEVERITY == "Spot Disease") %>% bind_rows(bleach), "data/clean/diseases_data6.csv", row.names = FALSE)
write.csv(diseases %>% filter(SEVERITY == "Stress/Predation") %>% bind_rows(bleach), "data/clean/diseases_data7.csv", row.names = FALSE)


