# Mapping Urban Growth in Bengaluru with Historical CORONA Imagery

![Project overview image](../assets/images/bengaluru-corona-1965.png)

## Overview

A Google Earth Engine web app that visualises high-resolution CORONA satellite imagery of
Bengaluru from 1965 to study historical urban growth. Most studies of urban change use Landsat
as their baseline, but CORONA's 2.75 m resolution pushes that baseline back further and reveals
land-use changes that coarser imagery misses.

- **Study Area:** Bengaluru, India
- **Duration:** Ongoing personal project
- **Role:** Solo project
- **Status:** In progress

---

## Methods & Tools

**Data Sources**

- Declassified CORONA satellite imagery (1965), 2.75 m resolution
- Landsat imagery, for baseline comparison

**Processing Steps**

1. Georeferenced the historical CORONA imagery in QGIS
2. Compared the georeferenced imagery against the standard Landsat baseline
3. Published the imagery as an interactive web application on Google Earth Engine

**Tools Used**

| Tool | Purpose |
|------|---------|
| QGIS | Georeferencing historical CORONA imagery |
| Google Earth Engine | Building and hosting the interactive web application |

---
## Key Findings

- CORONA's 2.75 m resolution reveals land-use changes in 1960s Bengaluru that are not visible in the standard Landsat baseline
- Shifting the historical baseline back to 1965 gives a longer view of the city's urban growth trajectory

---

## Links

[View Web App](https://ee-soniacivil.projects.earthengine.app/view/bengaluru-in-1965){ .md-button .md-button--primary }

### Other Work Samples

- **[Walkability Analysis](https://www.linkedin.com/posts/activity-7388104109951770624-UypM?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAwb5s8BK-RgCIzdl6pa3GNH-qtMWDCJtcY)** — Walkability scores for Bengaluru using NetAScore (University of Salzburg), which classifies OSM road networks for walkability and bikeability. Tools: QGIS, Python.
