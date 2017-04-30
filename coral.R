setwd(dirname(rstudioapi::getActiveDocumentContext()$path))
suppressMessages({
  library(dplyr)
  library(reshape2)
  library(ggplot2)
  library(readr)
  library(ggthemes)
  library(caTools)
})

############## load datasets ############## 
bleaching_data   <- read.csv('data/CoralBleaching.csv', stringsAsFactors=FALSE, fileEncoding="latin1", na.strings = "")
diseases_data  <- read.csv('data/CoralDiseases.csv', stringsAsFactors=FALSE, fileEncoding="latin1")
protected_areas_data  <- read.csv('data/MarineProtectedAreas.csv', stringsAsFactors=FALSE, fileEncoding="latin1")
reef_locations_data <- read.csv('data/ReefLocations.csv', stringsAsFactors=FALSE, fileEncoding="latin1")

# TO DO:
# reduce dataset, remove NAs for values not needed

bleaching_data %>% 
  select(YEAR, COUNTRY, LOCATION, LAT, LON, BLEACHING_SEVERITY, REMARKS, SOURCE) -> bleaching
# NAs: remarks (3103); location(123)

sum(is.na(bleaching$SOURCE))

