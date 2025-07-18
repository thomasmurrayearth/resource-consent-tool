  export const aucklandPlanningRules = {
  lastUpdated: "2025-07-17",
  source: "Auckland Unitary Plan - https://unitaryplan.aucklandcouncil.govt.nz/",
  researcher: "Thomas Murray",
  
  zones: {
    H1: {
      name: "Large Lot Zone",
      description: "Zone for single houses on large lots",
      aupSection: "H1.6",
      activities: {
        houseExtension: {
          maxHeight: 8,
          maxStoreys: 2,
          heightRule: "H1.6.4.1",
          frontSetback: 10,
          sideSetback: 2.5,
          rearSetback: 6,
          setbackRule: "H1.6.4.1",
          maxBuildingCoverage: 20,
          maxImperviousCoverage: 35,
          coverageRule: "H1.6.6",
          isPermitted: true,
          requiresConsent: { heightBreach: true, setbackBreach: true, coverageBreach: true, other: "None identified" },
          specialConditions: "30m² outdoor living space required",
          confidence: "HIGH"
        },
        newDwelling: {
          maxHeight: 8,
          maxStoreys: 2,
          heightRule: "H1.6.4.1",
          frontSetback: 10,
          sideSetback: 2.5,
          rearSetback: 6,
          setbackRule: "H1.6.4.1",
          maxDwellingsPerSite: 1,
          minSiteAreaPerDwelling: null,
          densityRule: "H1.6.1",
          maxBuildingCoverage: 20,
          maxImperviousCoverage: 35,
          coverageRule: "H1.6.6",
          isPermitted: true,
          requiresConsent: { heightBreach: true, setbackBreach: true, densityBreach: true, coverageBreach: true, other: "None identified" },
          specialConditions: "30m² outdoor living space required",
          confidence: "HIGH"
        },
        minorDwelling: {
          maxFloorArea: 65,
          maxHeight: 8,
          maxStoreys: 2,
          heightRule: "H1.6.3(1)",
          frontSetback: 10,
          sideSetback: 2.5,
          rearSetback: 6,
          sizeRule: "H1.6.3(1)",
          locationRule: "H1.6.3(2)",
          kitchenAllowed: true,
          separateAccessRequired: false,
          useRule: "H1.6.3",
          isPermitted: true,
          requiresConsent: { sizeExceeded: true, setbackBreach: true, kitchenIncluded: true, other: "Kitchen facilities trigger consent" },
          specialConditions: "Max 65m²; kitchen triggers consent",
          confidence: "HIGH"
        },
        swimmingPool: {
          maxDepth: null,
          maxArea: null,
          maxHeight: 1.2,
          maxStoreys: 0,
          heightRule: "H1.6.4.1; F9",
          frontSetback: 10,
          sideSetback: 1,
          rearSetback: 1,
          setbackRule: "H1.6.4.1",
          maxBuildingCoverage: 20,
          maxImperviousCoverage: 35,
          coverageRule: "H1.6.6",
          countsAsBuildingCoverage: false,
          countsAsImperviousCoverage: true,
          fencingRequired: true,
          fenceHeight: 1.2,
          sizeRule: "H1.6.4.1",
          safetyRule: "Building Code F9",
          isPermitted: true,
          requiresConsent: { setbackBreach: true, sizeExceeded: false, safetyNonCompliance: true, other: "Fencing must meet Building Code F9" },
          specialConditions: "Fencing required under Building Code",
          confidence: "MEDIUM"
        },
        largeShed: {
          maxFloorArea: null,
          maxHeight: 8,
          maxStoreys: 1,
          sizeRule: "E12.6",
          frontSetback: 10,
          sideSetback: 1,
          rearSetback: 1,
          setbackRule: "H1.6.4.1",
          locationRule: "H1.6.4.1",
          permittedUses: "Accessory to principal dwelling",
          prohibitedUses: "Sleep‑out if >65m² not accessory",
          useRule: "H1.6.4.1; E12.6",
          countsAsBuildingCoverage: true,
          countsAsImperviousCoverage: true,
          maxBuildingCoverage: 20,
          maxImperviousCoverage: 35,
          coverageRule: "H1.6.6",
          isPermitted: true,
          requiresConsent: { sizeExceeded: true, setbackBreach: true, useProhibited: true, other: "Consent needed if >30m² accessory building" },
          specialConditions: "Max 30m² exempt; larger sheds trigger consent",
          confidence: "MEDIUM"
        }
      }
    },
    H2: {
      name: "Rural & Coastal Settlement Zone",
      description: "Zone for small rural and coastal villages",
      aupSection: "H2.6",
      activities: {
        houseExtension: {
          maxHeight: 8,
          maxStoreys: 2,
          heightRule: "H2.6.5(1)",
          frontSetback: 5,
          sideSetback: 1,
          rearSetback: 1,
          setbackRule: "H2.6.7(1)",
          maxBuildingCoverage: 20,
          maxImperviousCoverage: 35,
          coverageRule: "H2.6.9; H2.6.8",
          isPermitted: true,
          requiresConsent: { heightBreach: true, setbackBreach: true, coverageBreach: true, other: "Roof slope breach triggers consent" },
          specialConditions: "Roof >50% slope may exceed height",
          confidence: "HIGH"
        },
        newDwelling: {
          maxHeight: 8,
          maxStoreys: 2,
          heightRule: "H2.6.5(1)",
          frontSetback: 5,
          sideSetback: 1,
          rearSetback: 1,
          setbackRule: "H2.6.7(1)",
          maxDwellingsPerSite: 1,
          minSiteAreaPerDwelling: null,
          densityRule: "H2.4.1(3)",
          maxBuildingCoverage: 20,
          maxImperviousCoverage: 35,
          coverageRule: "H2.6.9; H2.6.8",
          isPermitted: true,
          requiresConsent: { heightBreach: true, setbackBreach: true, densityBreach: false, coverageBreach: true, other: "None identified" },
          specialConditions: "Roof >50% slope may exceed height",
          confidence: "HIGH"
        },
        minorDwelling: {
          maxFloorArea: 65,
          maxHeight: 8,
          maxStoreys: 2,
          sizeRule: "H2.4.1(3)",
          frontSetback: 5,
          sideSetback: 1,
          rearSetback: 1,
          locationRule: "H2.4.1(3)",
          kitchenAllowed: true,
          separateAccessRequired: false,
          useRule: "H2.4.1(3)",
          isPermitted: true,
          requiresConsent: { sizeExceeded: true, setbackBreach: true, kitchenIncluded: true, other: "None identified" },
          specialConditions: "One minor dwelling per site",
          confidence: "HIGH"
        },
        swimmingPool: {
          maxDepth: null,
          maxArea: null,
          maxHeight: 1.2,
          maxStoreys: 0,
          heightRule: "H2.6.5(1)",
          frontSetback: 5,
          sideSetback: 1,
          rearSetback: 1,
          setbackRule: "H2.6.7(1)",
          maxBuildingCoverage: 20,
          maxImperviousCoverage: 35,
          coverageRule: "H2.6.9; H2.6.8",
          countsAsBuildingCoverage: false,
          countsAsImperviousCoverage: true,
          fencingRequired: true,
          fenceHeight: 2,
          sizeRule: "H2.6.7",
          safetyRule: "Building Code F9",
          isPermitted: true,
          requiresConsent: { setbackBreach: true, sizeExceeded: false, safetyNonCompliance: true, other: "Fence height must meet yard rules" },
          specialConditions: "Fence ≤2m if compliance with yard rules",
          confidence: "MEDIUM"
        },
        largeShed: {
          maxFloorArea: null,
          maxHeight: 8,
          maxStoreys: 1,
          sizeRule: "H2.6.9",
          frontSetback: 5,
          sideSetback: 1,
          rearSetback: 1,
          locationRule: "H2.6.7",
          permittedUses: "Accessory to residential",
          prohibitedUses: "Sleep‑out not allowed",
          useRule: "H2.4.1",
          countsAsBuildingCoverage: true,
          countsAsImperviousCoverage: true,
          maxBuildingCoverage: 20,
          maxImperviousCoverage: 35,
          coverageRule: "H2.6.9; H2.6.8",
          isPermitted: true,
          requiresConsent: { sizeExceeded: true, setbackBreach: true, useProhibited: true, other: "None identified" },
          specialConditions: "Accessory buildings only",
          confidence: "HIGH"
        }
      }
    },
    H3: {
      name: "Residential – Single House Zone",
      description: "Zone for standalone houses on suburban lots",
      aupSection: "H3.6",
      activities: {
        houseExtension: {
          maxHeight: 8,
          maxStoreys: 2,
          heightRule: "H3.6.4.1",
          frontSetback: 6,
          sideSetback: 1.5,
          rearSetback: 6,
          setbackRule: "H3.6.4.1",
          maxBuildingCoverage: 35,
          maxImperviousCoverage: 50,
          coverageRule: "H3.6.4.1",
          isPermitted: true,
          requiresConsent: { heightBreach: true, setbackBreach: true, coverageBreach: true, other: "None identified" },
          specialConditions: "Outdoor living space ≥30m² required",
          confidence: "HIGH"
        },
        newDwelling: {
          maxHeight: 8,
          maxStoreys: 2,
          heightRule: "H3.6.4.1",
          frontSetback: 6,
          sideSetback: 1.5,
          rearSetback: 6,
          setbackRule: "H3.6.4.1",
          maxDwellingsPerSite: 1,
          minSiteAreaPerDwelling: 450,
          densityRule: "H3.4.1.2",
          maxBuildingCoverage: 35,
          maxImperviousCoverage: 50,
          coverageRule: "H3.6.4.1",
          isPermitted: true,
          requiresConsent: { heightBreach: true, setbackBreach: true, densityBreach: true, coverageBreach: true, other: "None identified" },
          specialConditions: "Outdoor living space ≥30m² required",
          confidence: "HIGH"
        },
        minorDwelling: {
          maxFloorArea: 55,
          maxHeight: 8,
          maxStoreys: 2,
          heightRule: "H3.6.4.1",
          frontSetback: 6,
          sideSetback: 1.5,
          rearSetback: 6,
          sizeRule: "H3.6.7.2",
          locationRule: "H3.6.7.1",
          kitchenAllowed: false,
          separateAccessRequired: true,
          useRule: "H3.6.7",
          isPermitted: true,
          requiresConsent: {	heightBreach: true, setbackBreach: true, coverageBreach: true, other: "None identified" },
          specialConditions: "Minor dwelling under 55m² permitted",
          confidence: "HIGH"
        },
        swimmingPool: {
          maxDepth: null,
          maxArea: 50,
          maxHeight: 1.2,
          maxStoreys: 0,
          heightRule: "H3.6.10",
          frontSetback: 6,
          sideSetback: 1.5,
          rearSetback: 1,
          setbackRule: "H3.6.10",
          maxBuildingCoverage: 35,
          maxImperviousCoverage: 50,
          coverageRule: "H3.6.10",
          countsAsBuildingCoverage: false,
          countsAsImperviousCoverage: true,
          fencingRequired: true,
          fenceHeight: 1.2,
          sizeRule: "H3.6.10",
          safetyRule: "H3.6.10",
          isPermitted: true,
          requiresConsent: { setbackBreach: true, sizeExceeded: false, safetyNonCompliance: true, other: "Non-compliant fencing triggers consent" },
          specialConditions: "Fencing required under H3.6.10",
          confidence: "HIGH"
        },
        largeShed: {
          maxFloorArea: 30,
          maxHeight: 4,
          maxStoreys: 1,
          heightRule: "H3.6.8.1",
          frontSetback: 6,
          sideSetback: 1.5,
          rearSetback: 1,
          setbackRule: "H3.6.8.2",
          sizeRule: "H3.6.8.1",
          locationRule: "H3.6.8.2",
          permittedUses: "Accessory storage",
          prohibitedUses: "No habitable or commercial use",
          useRule: "H3.6.8",
          countsAsBuildingCoverage: true,
          countsAsImperviousCoverage: true,
          maxBuildingCoverage: 35,
          maxImperviousCoverage: 50,
          coverageRule: "H3.6.8",
          isPermitted: true,
          requiresConsent: { heightBreach: true, setbackBreach: true, coverageBreach: true, other: "None identified" },
          specialConditions: "Accessory use only",
          confidence: "HIGH"
        }
      }
    },
  H4: {
    name: "Residential – Mixed Housing Suburban Zone",
    description: "Two‑storey suburban homes, support up to 3 dwellings per site",
    aupSection: "H4.6",
    activities: {
      houseExtension: {
        maxHeight: 8,
        maxStoreys: 2,
        heightRule: "H4.6.4(1)",
        frontSetback: 3,
        sideSetback: 1,
        rearSetback: 1,
        setbackRule: "H4.6.7(1)",
        maxBuildingCoverage: 40,
        maxImperviousCoverage: 60,
        coverageRule: "H4.6.9; H4.6.8",
        isPermitted: true,
        requiresConsent: { heightBreach: true, setbackBreach: true, coverageBreach: true, other: "None identified" },
        specialConditions: "50% of front yard must be landscaped",
        confidence: "HIGH"
      },
      newDwelling: {
        maxHeight: 8,
        maxStoreys: 2,
        heightRule: "H4.6.4(1)",
        frontSetback: 3,
        sideSetback: 1,
        rearSetback: 1,
        setbackRule: "H4.6.7(1)",
        maxDwellingsPerSite: 3,
        minSiteAreaPerDwelling: 300,
        densityRule: "H4.4.1",
        maxBuildingCoverage: 40,
        maxImperviousCoverage: 60,
        coverageRule: "H4.6.9; H4.6.8",
        isPermitted: true,
        requiresConsent: { heightBreach: true, setbackBreach: true, densityBreach: true, coverageBreach: true, other: "None identified" },
        specialConditions: "Roof slope exception: +1 m if ≥15°",
        confidence: "HIGH"
      },
      minorDwelling: {
        maxFloorArea: 55,
        maxHeight: 8,
        maxStoreys: 1,
        sizeRule: "H4.6.7.2",
        frontSetback: 3,
        sideSetback: 1,
        rearSetback: 1,
        locationRule: "H4.6.7.1",
        kitchenAllowed: false,
        separateAccessRequired: true,
        useRule: "H4.6.7",
        isPermitted: true,
        requiresConsent: { sizeExceeded: true, setbackBreach: true, kitchenIncluded: false, other: "None identified" },
        specialConditions: "Accessory only, separate access",
        confidence: "HIGH"
      },
      swimmingPool: {
        maxDepth: null,
        maxArea: null,
        maxHeight: 1.2,
        maxStoreys: 0,
        heightRule: "H4.6.10",
        frontSetback: 3,
        sideSetback: 1,
        rearSetback: 1,
        setbackRule: "H4.6.10",
        maxBuildingCoverage: 40,
        maxImperviousCoverage: 60,
        coverageRule: "H4.6.10",
        countsAsBuildingCoverage: false,
        countsAsImperviousCoverage: true,
        fencingRequired: true,
        fenceHeight: 1.2,
        sizeRule: "H4.6.10",
        safetyRule: "H4.6.14",
        isPermitted: true,
        requiresConsent: { setbackBreach: true, sizeExceeded: false, safetyNonCompliance: true, other: "Fence non‑compliant with H4.6.14" },
        specialConditions: "Fence height rules apply per H4.6.14",
        confidence: "HIGH"
      },
      largeShed: {
        maxFloorArea: 30,
        maxHeight: 8,
        maxStoreys: 1,
        sizeRule: "H4.6.8.1",
        frontSetback: 3,
        sideSetback: 1,
        rearSetback: 1,
        setbackRule: "H4.6.8.2",
        locationRule: "H4.6.8.2",
        permittedUses: "Accessory to residential",
        prohibitedUses: "No habitable/commercial use",
        useRule: "H4.6.8",
        countsAsBuildingCoverage: true,
        countsAsImperviousCoverage: true,
        maxBuildingCoverage: 40,
        maxImperviousCoverage: 60,
        coverageRule: "H4.6.8",
        isPermitted: true,
        requiresConsent: { sizeExceeded: true, setbackBreach: true, useProhibited: true, other: "None identified" },
        specialConditions: "Accessory use only",
        confidence: "HIGH"
      }
    }
  },
  H5: {
    name: "Residential – Mixed Housing Urban Zone",
    description: "Higher‑density suburban housing up to three storeys",
    aupSection: "H5.6",
    activities: {
      houseExtension: {
        maxHeight: 11,
        maxStoreys: 3,
        heightRule: "H5.6.4",
        frontSetback: 2.5,
        sideSetback: 1,
        rearSetback: 1,
        setbackRule: "H5.6.8",
        maxBuildingCoverage: 50,
        maxImperviousCoverage: 60,
        coverageRule: "H5.6.10; H5.6.9",
        isPermitted: true,
        requiresConsent: { heightBreach: true, setbackBreach: true, coverageBreach: true, other: "Roof slope >50% triggers consent" },
        specialConditions: "50% of roof may exceed height if ≥15°",
        confidence: "HIGH"
      },
      newDwelling: {
        maxHeight: 11,
        maxStoreys: 3,
        heightRule: "H5.6.4",
        frontSetback: 2.5,
        sideSetback: 1,
        rearSetback: 1,
        setbackRule: "H5.6.8",
        maxDwellingsPerSite: 3,
        minSiteAreaPerDwelling: null,
        densityRule: "H5.4.1",
        maxBuildingCoverage: 50,
        maxImperviousCoverage: 60,
        coverageRule: "H5.6.10; H5.6.9",
        isPermitted: true,
        requiresConsent: { heightBreach: true, setbackBreach: true, densityBreach: true, coverageBreach: true, other: "None identified" },
        specialConditions: "Outdoor living space ≥8 m²",
        confidence: "HIGH"
      },
      minorDwelling: {
        maxFloorArea: 50,
        maxHeight: 11,
        maxStoreys: 3,
        sizeRule: "H5.6.16",
        frontSetback: 2.5,
        sideSetback: 1,
        rearSetback: 1,
        locationRule: "H5.6.8",
        kitchenAllowed: true,
        separateAccessRequired: false,
        useRule: "H5.6.16",
        isPermitted: true,
        requiresConsent: { sizeExceeded: true, setbackBreach: true, kitchenIncluded: true, other: "None identified" },
        specialConditions: "Min unit size applies",
        confidence: "MEDIUM"
      },
      swimmingPool: {
        maxDepth: null,
        maxArea: null,
        maxHeight: 1.2,
        maxStoreys: 0,
        heightRule: "H5.6.10",
        frontSetback: 2.5,
        sideSetback: 1,
        rearSetback: 1,
        setbackRule: "H5.6.10",
        maxBuildingCoverage: 50,
        maxImperviousCoverage: 60,
        coverageRule: "H5.6.10; H5.6.9",
        countsAsBuildingCoverage: false,
        countsAsImperviousCoverage: true,
        fencingRequired: true,
        fenceHeight: 1.4,
        sizeRule: "H5.6.10",
        safetyRule: "H5.6.15",
        isPermitted: true,
        requiresConsent: { setbackBreach: true, sizeExceeded: false, safetyNonCompliance: true, other: "Fence height non‑compliance" },
        specialConditions: "Fence must comply with H5.6.15",
        confidence: "HIGH"
      },
      largeShed: {
        maxFloorArea: 30,
        maxHeight: 11,
        maxStoreys: 1,
        sizeRule: "H5.6.8",
        frontSetback: 2.5,
        sideSetback: 1,
        rearSetback: 1,
        locationRule: "H5.6.8",
        permittedUses: "Accessory residential use",
        prohibitedUses: "Commercial use",
        useRule: "H5.6.8",
        countsAsBuildingCoverage: true,
        countsAsImperviousCoverage: true,
        maxBuildingCoverage: 50,
        maxImperviousCoverage: 60,
        coverageRule: "H5.6.10",
        isPermitted: true,
        requiresConsent: { sizeExceeded: true, setbackBreach: true, useProhibited: true, other: "None identified" },
        specialConditions: "Accessory only",
        confidence: "HIGH"
      }
    }
  },
  H6: {
    name: "Residential – Terrace Housing & Apartment Buildings Zone",
    description: "Medium to higher density, terrace & small apartment buildings",
    aupSection: "H6.6",
    activities: {
      houseExtension: {
        maxHeight: 11,
        maxStoreys: 3,
        heightRule: "H6.6.4(1)",
        frontSetback: 2,
        sideSetback: 1,
        rearSetback: 1,
        setbackRule: "H6.6.8(1)",
        maxBuildingCoverage: 60,
        maxImperviousCoverage: 70,
        coverageRule: "H6.6.10; H6.6.9",
        isPermitted: true,
        requiresConsent: { heightBreach: true, setbackBreach: true, coverageBreach: true, other: "None identified" },
        specialConditions: "Building frontage articulation required",
        confidence: "HIGH"
      },
      newDwelling: {
        maxHeight: 11,
        maxStoreys: 3,
        heightRule: "H6.6.4(1)",
        frontSetback: 2,
        sideSetback: 1,
        rearSetback: 1,
        setbackRule: "H6.6.8(1)",
        maxDwellingsPerSite: null,
        minSiteAreaPerDwelling: null,
        densityRule: "H6.4.1",
        maxBuildingCoverage: 60,
        maxImperviousCoverage: 70,
        coverageRule: "H6.6.10; H6.6.9",
        isPermitted: true,
        requiresConsent: { heightBreach: true, setbackBreach: true, densityBreach: false, coverageBreach: true, other: "None identified" },
        specialConditions: "Building frontage articulation required",
        confidence: "HIGH"
      },
      minorDwelling: {
        maxFloorArea: 50,
        maxHeight: 11,
        maxStoreys: 2,
        sizeRule: "H6.6.16",
        frontSetback: 2,
        sideSetback: 1,
        rearSetback: 1,
        locationRule: "H6.6.8(2)",
        kitchenAllowed: true,
        separateAccessRequired: false,
        useRule: "H6.6.16",
        isPermitted: true,
        requiresConsent: { sizeExceeded: true, setbackBreach: true, kitchenIncluded: true, other: "None identified" },
        specialConditions: "Accessory or visitor unit",
        confidence: "MEDIUM"
      },
      swimmingPool: {
        maxDepth: null,
        maxArea: null,
        maxHeight: 1.2,
        maxStoreys: 0,
        heightRule: "H6.6.10",
        frontSetback: 2,
        sideSetback: 1,
        rearSetback: 1,
        setbackRule: "H6.6.10",
        maxBuildingCoverage: 60,
        maxImperviousCoverage: 70,
        coverageRule: "H6.6.10; H6.6.9",
        countsAsBuildingCoverage: false,
        countsAsImperviousCoverage: true,
        fencingRequired: true,
        fenceHeight: 1.2,
        sizeRule: "H6.6.10",
        safetyRule: "H6.6.14",
        isPermitted: true,
        requiresConsent: { setbackBreach: true, sizeExceeded: false, safetyNonCompliance: true, other: "Fence non‑compliant with H6.6.14" },
        specialConditions: "Perimeter fencing rules apply",
        confidence: "HIGH"
      },
      largeShed: {
        maxFloorArea: 30,
        maxHeight: 5,
        maxStoreys: 1,
        sizeRule: "H6.6.8",
        frontSetback: 2,
        sideSetback: 1,
        rearSetback: 1,
        locationRule: "H6.6.8",
        permittedUses: "Accessory vehicle/storage",
        prohibitedUses: "No habitable or commercial",
        useRule: "H6.6.8",
        countsAsBuildingCoverage: true,
        countsAsImperviousCoverage: true,
        maxBuildingCoverage: 60,
        maxImperviousCoverage: 70,
        coverageRule: "H6.6.10",
        isPermitted: true,
        requiresConsent: { sizeExceeded: true, setbackBreach: true, useProhibited: true, other: "None identified" },
        specialConditions: "Accessory only",
        confidence: "HIGH"
      }
    }
  },
  H19: {
    name: "Rural – Rural Production Zone",
    description: "Large-scale rural production on productive land",
    aupSection: "H19.10",
    activities: {
      houseExtension: {
        maxHeight: 8,
        maxStoreys: 2,
        heightRule: "H19.10.2",
        frontSetback: 10,
        sideSetback: 10,
        rearSetback: 10,
        setbackRule: "H19.10.3.1",
        maxBuildingCoverage: null,
        maxImperviousCoverage: null,
        coverageRule: null,
        isPermitted: true,
        requiresConsent: { heightBreach: true, setbackBreach: true, coverageBreach: false, other: "None identified" },
        specialConditions: "None identified",
        confidence: "HIGH"
      },
      newDwelling: {
        maxHeight: 8,
        maxStoreys: 2,
        heightRule: "H19.10.2",
        frontSetback: 10,
        sideSetback: 10,
        rearSetback: 10,
        setbackRule: "H19.10.3.1",
        maxDwellingsPerSite: 1,
        minSiteAreaPerDwelling: null,
        densityRule: null,
        maxBuildingCoverage: null,
        maxImperviousCoverage: null,
        coverageRule: null,
        isPermitted: true,
        requiresConsent: { heightBreach: true, setbackBreach: true, densityBreach: false, coverageBreach: false, other: "None identified" },
        specialConditions: "None identified",
        confidence: "HIGH"
      },
      minorDwelling: {
        maxFloorArea: 65,
        maxHeight: 9,
        maxStoreys: 1,
        sizeRule: "H19.10.11",
        frontSetback: 10,
        sideSetback: 10,
        rearSetback: 10,
        locationRule: "H19.10.11",
        kitchenAllowed: true,
        separateAccessRequired: false,
        useRule: "H19.10.11",
        isPermitted: true,
        requiresConsent: { sizeExceeded: true, setbackBreach: true, kitchenIncluded: true, other: "Site must exceed 1 ha; share driveway" },
        specialConditions: "Max 65m²; share access; site >1 ha",
        confidence: "HIGH"
      },
      swimmingPool: {
        maxDepth: null,
        maxArea: null,
        maxHeight: null,
        maxStoreys: null,
        heightRule: null,
        frontSetback: 10,
        sideSetback: 10,
        rearSetback: 10,
        setbackRule: "H19.10.3.1",
        countsAsBuildingCoverage: false,
        countsAsImperviousCoverage: false,
        fencingRequired: true,
        fenceHeight: 1.2,
        sizeRule: null,
        safetyRule: null,
        isPermitted: true,
        requiresConsent: { setbackBreach: true, sizeExceeded: false, safetyNonCompliance: true, other: "Fence height must comply with residential rules" },
        specialConditions: "Fence per residential safety rules",
        confidence: "MEDIUM"
      },
      largeShed: {
        maxFloorArea: null,
        maxHeight: 8,
        maxStoreys: 1,
        sizeRule: null,
        frontSetback: 10,
        sideSetback: 10,
        rearSetback: 10,
        locationRule: "H19.10.2",
        permittedUses: "Rural production‑related storage",
        prohibitedUses: "Residential or commercial use",
        useRule: "H19.10.1",
        countsAsBuildingCoverage: false,
        countsAsImperviousCoverage: false,
        isPermitted: true,
        requiresConsent: { sizeExceeded: false, setbackBreach: true, useProhibited: true, other: "Accessory to rural production only" },
        specialConditions: "Only rural production accessory",
        confidence: "HIGH"
      }
    }
  }
}
