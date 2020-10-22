$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/ValJPMorganlogo.feature");
formatter.feature({
  "line": 2,
  "name": "Google search validation",
  "description": "",
  "id": "google-search-validation",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Validate user can search given keyword and validate JP Morgan logo displayed after clicking search result",
  "description": "",
  "id": "google-search-validation;validate-user-can-search-given-keyword-and-validate-jp-morgan-logo-displayed-after-clicking-search-result",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@searchandvalidatelogo"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User navigate to google homepage \"\u003cexpectedtitle\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User searches using given data \"\u003csearchdata\u003e\" and select search result on googlepage",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User verify JP Mogan logo displayed on home page successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "google-search-validation;validate-user-can-search-given-keyword-and-validate-jp-morgan-logo-displayed-after-clicking-search-result;",
  "rows": [
    {
      "cells": [
        "expectedtitle",
        "searchdata"
      ],
      "line": 12,
      "id": "google-search-validation;validate-user-can-search-given-keyword-and-validate-jp-morgan-logo-displayed-after-clicking-search-result;;1"
    },
    {
      "cells": [
        "Google",
        "J.P. Morgan"
      ],
      "line": 13,
      "id": "google-search-validation;validate-user-can-search-given-keyword-and-validate-jp-morgan-logo-displayed-after-clicking-search-result;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "Validate user can search given keyword and validate JP Morgan logo displayed after clicking search result",
  "description": "",
  "id": "google-search-validation;validate-user-can-search-given-keyword-and-validate-jp-morgan-logo-displayed-after-clicking-search-result;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@searchandvalidatelogo"
    },
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User navigate to google homepage \"Google\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User searches using given data \"J.P. Morgan\" and select search result on googlepage",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User verify JP Mogan logo displayed on home page successfully",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Google",
      "offset": 34
    }
  ],
  "location": "StepDef.UserNavigatetoGoogleHomePage(String)"
});
formatter.result({
  "duration": 9008394300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "J.P. Morgan",
      "offset": 32
    }
  ],
  "location": "StepDef.userSearchorCompanyNameUsingandSelectSearchResultOnGooglePage(String)"
});
formatter.result({
  "duration": 35724749700,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.userJPMoganLogoDisplayeonHomePageSuccessfully()"
});
formatter.result({
  "duration": 118549300,
  "status": "passed"
});
});