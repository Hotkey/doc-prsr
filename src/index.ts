// import { InputOutput } from  './input-output';
// const io = new InputOutput();
// io.createFile();


import { TypedocParser } from './typedoc.parser/typedoc.parser';
import * as fs from 'fs';
const json = {
  "id": 0,
  "name": "nga",
  "kind": 0,
  "flags": {},
  "children": [
    {
      "id": 1,
      "name": "\"e2e/card.e2e-spec\"",
      "kind": 1,
      "kindString": "External module",
      "flags": {
        "isExported": true
      },
      "originalName": "/Users/nixa/Development/Projects/Akveo/ng2-admin/e2e/card.e2e-spec.ts",
      "children": [
        {
          "id": 13,
          "name": "activeColor",
          "kind": 32,
          "kindString": "Variable",
          "flags": {},
          "sources": [
            {
              "fileName": "e2e/card.e2e-spec.ts",
              "line": 20,
              "character": 17
            }
          ],
          "type": {
            "type": "instrinct",
            "name": "string"
          },
          "defaultValue": "\"rgba(63, 66, 67, 1)\""
        },
        {
          "id": 17,
          "name": "cards",
          "kind": 32,
          "kindString": "Variable",
          "flags": {},
          "sources": [
            {
              "fileName": "e2e/card.e2e-spec.ts",
              "line": 77,
              "character": 9
            }
          ],
          "type": {
            "type": "instrinct",
            "isArray": true,
            "name": "any"
          },
          "defaultValue": " []"
        },
        {
          "id": 16,
          "name": "colors",
          "kind": 32,
          "kindString": "Variable",
          "flags": {},
          "sources": [
            {
              "fileName": "e2e/card.e2e-spec.ts",
              "line": 46,
              "character": 12
            }
          ],
          "type": {
            "type": "instrinct",
            "isArray": true,
            "name": "any"
          },
          "defaultValue": " [\n  {\n    key: 'primary',\n    value: primaryColor,\n  },\n  {\n    key: 'success',\n    value: successColor,\n  },\n  {\n    key: 'info',\n    value: infoColor,\n  },\n  {\n    key: 'warning',\n    value: warningColor,\n  },\n  {\n    key: 'danger',\n    value: dangerColor,\n  },\n  {\n    key: 'active',\n    value: activeColor,\n  },\n  {\n    key: 'disabled',\n    value: disabledColor,\n  },\n]"
        },
        {
          "id": 12,
          "name": "dangerColor",
          "kind": 32,
          "kindString": "Variable",
          "flags": {},
          "sources": [
            {
              "fileName": "e2e/card.e2e-spec.ts",
              "line": 19,
              "character": 17
            }
          ],
          "type": {
            "type": "instrinct",
            "name": "string"
          },
          "defaultValue": "\"rgba(249, 83, 114, 1)\""
        },
        {
          "id": 2,
          "name": "defaultHeight",
          "kind": 32,
          "kindString": "Variable",
          "flags": {},
          "sources": [
            {
              "fileName": "e2e/card.e2e-spec.ts",
              "line": 8,
              "character": 19
            }
          ],
          "type": {
            "type": "instrinct",
            "name": "number"
          },
          "defaultValue": "161"
        },
        {
          "id": 14,
          "name": "disabledColor",
          "kind": 32,
          "kindString": "Variable",
          "flags": {},
          "sources": [
            {
              "fileName": "e2e/card.e2e-spec.ts",
              "line": 21,
              "character": 19
            }
          ],
          "type": {
            "type": "instrinct",
            "name": "string"
          },
          "defaultValue": "\"rgba(255, 255, 255, 0.4)\""
        },
        {
          "id": 15,
          "name": "heights",
          "kind": 32,
          "kindString": "Variable",
          "flags": {},
          "sources": [
            {
              "fileName": "e2e/card.e2e-spec.ts",
              "line": 23,
              "character": 13
            }
          ],
          "type": {
            "type": "instrinct",
            "isArray": true,
            "name": "any"
          },
          "defaultValue": " [\n  {\n    key: 'small',\n    value: smallHeight,\n  },\n  {\n    key: 'xsmall',\n    value: xsmallHeight,\n  },\n  {\n    key: 'medium',\n    value: mediumHeight,\n  },\n  {\n    key: 'xmedium',\n    value: xmediumHeight,\n  },\n  {\n    key: 'large',\n    value: largeHeight,\n  },\n]"
        },
        {
          "id": 10,
          "name": "infoColor",
          "kind": 32,
          "kindString": "Variable",
          "flags": {},
          "sources": [
            {
              "fileName": "e2e/card.e2e-spec.ts",
              "line": 17,
              "character": 15
            }
          ],
          "type": {
            "type": "instrinct",
            "name": "string"
          },
          "defaultValue": "\"rgba(64, 218, 241, 1)\""
        },
        {
          "id": 7,
          "name": "largeHeight",
          "kind": 32,
          "kindString": "Variable",
          "flags": {},
          "sources": [
            {
              "fileName": "e2e/card.e2e-spec.ts",
              "line": 13,
              "character": 17
            }
          ],
          "type": {
            "type": "instrinct",
            "name": "number"
          },
          "defaultValue": "1079"
        },
        {
          "id": 5,
          "name": "mediumHeight",
          "kind": 32,
          "kindString": "Variable",
          "flags": {},
          "sources": [
            {
              "fileName": "e2e/card.e2e-spec.ts",
              "line": 11,
              "character": 18
            }
          ],
          "type": {
            "type": "instrinct",
            "name": "number"
          },
          "defaultValue": "505"
        },
        {
          "id": 8,
          "name": "primaryColor",
          "kind": 32,
          "kindString": "Variable",
          "flags": {},
          "sources": [
            {
              "fileName": "e2e/card.e2e-spec.ts",
              "line": 15,
              "character": 18
            }
          ],
          "type": {
            "type": "instrinct",
            "name": "string"
          },
          "defaultValue": "\"rgba(0, 171, 255, 1)\""
        },
        {
          "id": 3,
          "name": "smallHeight",
          "kind": 32,
          "kindString": "Variable",
          "flags": {},
          "sources": [
            {
              "fileName": "e2e/card.e2e-spec.ts",
              "line": 9,
              "character": 17
            }
          ],
          "type": {
            "type": "instrinct",
            "name": "number"
          },
          "defaultValue": "219"
        },
        {
          "id": 9,
          "name": "successColor",
          "kind": 32,
          "kindString": "Variable",
          "flags": {},
          "sources": [
            {
              "fileName": "e2e/card.e2e-spec.ts",
              "line": 16,
              "character": 18
            }
          ],
          "type": {
            "type": "instrinct",
            "name": "string"
          },
          "defaultValue": "\"rgba(139, 210, 47, 1)\""
        },
        {
          "id": 11,
          "name": "warningColor",
          "kind": 32,
          "kindString": "Variable",
          "flags": {},
          "sources": [
            {
              "fileName": "e2e/card.e2e-spec.ts",
              "line": 18,
              "character": 18
            }
          ],
          "type": {
            "type": "instrinct",
            "name": "string"
          },
          "defaultValue": "\"rgba(231, 186, 8, 1)\""
        },
        {
          "id": 6,
          "name": "xmediumHeight",
          "kind": 32,
          "kindString": "Variable",
          "flags": {},
          "sources": [
            {
              "fileName": "e2e/card.e2e-spec.ts",
              "line": 12,
              "character": 19
            }
          ],
          "type": {
            "type": "instrinct",
            "name": "number"
          },
          "defaultValue": "655"
        },
        {
          "id": 4,
          "name": "xsmallHeight",
          "kind": 32,
          "kindString": "Variable",
          "flags": {},
          "sources": [
            {
              "fileName": "e2e/card.e2e-spec.ts",
              "line": 10,
              "character": 18
            }
          ],
          "type": {
            "type": "instrinct",
            "name": "number"
          },
          "defaultValue": "292"
        },
        {
          "id": 18,
          "name": "prepareCards",
          "kind": 64,
          "kindString": "Function",
          "flags": {},
          "signatures": [
            {
              "id": 19,
              "name": "prepareCards",
              "kind": 4096,
              "kindString": "Call signature",
              "flags": {},
              "type": {
                "type": "reference",
                "name": "Array",
                "typeArguments": [
                  {
                    "type": "instrinct",
                    "name": "any"
                  }
                ]
              }
            }
          ],
          "sources": [
            {
              "fileName": "e2e/card.e2e-spec.ts",
              "line": 79,
              "character": 21
            }
          ]
        }
      ],
      "groups": [
        {
          "title": "Variables",
          "kind": 32,
          "children": [
            13,
            17,
            16,
            12,
            2,
            14,
            15,
            10,
            7,
            5,
            8,
            3,
            9,
            11,
            6,
            4
          ]
        },
        {
          "title": "Functions",
          "kind": 64,
          "children": [
            18
          ]
        }
      ],
      "sources": [
        {
          "fileName": "e2e/card.e2e-spec.ts",
          "line": 1,
          "character": 0
        }
      ]
    },
    {
      "id": 20,
      "name": "\"e2e/e2e-helper\"",
      "kind": 1,
      "kindString": "External module",
      "flags": {
        "isExported": true
      },
      "originalName": "/Users/nixa/Development/Projects/Akveo/ng2-admin/e2e/e2e-helper.ts",
      "children": [
        {
          "id": 21,
          "name": "hasClass",
          "kind": 64,
          "kindString": "Function",
          "flags": {
            "isExported": true
          },
          "comment": {
            "tags": [
              {
                "tag": "license",
                "text": "\nCopyright Akveo. All Rights Reserved.\nLicensed under the MIT License. See License.txt in the project root for license information.\n"
              }
            ]
          },
          "signatures": [
            {
              "id": 22,
              "name": "hasClass",
              "kind": 4096,
              "kindString": "Call signature",
              "flags": {},
              "comment": {},
              "parameters": [
                {
                  "id": 23,
                  "name": "el",
                  "kind": 32768,
                  "kindString": "Parameter",
                  "flags": {},
                  "type": {
                    "type": "instrinct",
                    "name": "any"
                  }
                },
                {
                  "id": 24,
                  "name": "cls",
                  "kind": 32768,
                  "kindString": "Parameter",
                  "flags": {},
                  "type": {
                    "type": "instrinct",
                    "name": "string"
                  }
                }
              ],
              "type": {
                "type": "instrinct",
                "name": "any"
              }
            }
          ],
          "sources": [
            {
              "fileName": "e2e/e2e-helper.ts",
              "line": 6,
              "character": 21
            }
          ]
        }
      ],
      "groups": [
        {
          "title": "Functions",
          "kind": 64,
          "children": [
            21
          ]
        }
      ],
      "sources": [
        {
          "fileName": "e2e/e2e-helper.ts",
          "line": 1,
          "character": 0
        }
      ]
    },
    {
      "id": 25,
      "name": "\"e2e/layout-footer.e2e-spec\"",
      "kind": 1,
      "kindString": "External module",
      "flags": {
        "isExported": true
      },
      "originalName": "/Users/nixa/Development/Projects/Akveo/ng2-admin/e2e/layout-footer.e2e-spec.ts",
      "sources": [
        {
          "fileName": "e2e/layout-footer.e2e-spec.ts",
          "line": 1,
          "character": 0
        }
      ]
    },
    {
      "id": 26,
      "name": "\"e2e/layout-header.e2e-spec\"",
      "kind": 1,
      "kindString": "External module",
      "flags": {
        "isExported": true
      },
      "originalName": "/Users/nixa/Development/Projects/Akveo/ng2-admin/e2e/layout-header.e2e-spec.ts",
      "sources": [
        {
          "fileName": "e2e/layout-header.e2e-spec.ts",
          "line": 1,
          "character": 0
        }
      ]
    },
    {
      "id": 27,
      "name": "\"e2e/layout-theme.e2e-spec\"",
      "kind": 1,
      "kindString": "External module",
      "flags": {
        "isExported": true
      },
      "originalName": "/Users/nixa/Development/Projects/Akveo/ng2-admin/e2e/layout-theme.e2e-spec.ts",
      "sources": [
        {
          "fileName": "e2e/layout-theme.e2e-spec.ts",
          "line": 1,
          "character": 0
        }
      ]
    },
    {
      "id": 28,
      "name": "\"e2e/layout.e2e-spec\"",
      "kind": 1,
      "kindString": "External module",
      "flags": {
        "isExported": true
      },
      "originalName": "/Users/nixa/Development/Projects/Akveo/ng2-admin/e2e/layout.e2e-spec.ts",
      "sources": [
        {
          "fileName": "e2e/layout.e2e-spec.ts",
          "line": 1,
          "character": 0
        }
      ]
    },
    {
      "id": 29,
      "name": "\"e2e/menu.e2e-spec\"",
      "kind": 1,
      "kindString": "External module",
      "flags": {
        "isExported": true
      },
      "originalName": "/Users/nixa/Development/Projects/Akveo/ng2-admin/e2e/menu.e2e-spec.ts",
      "children": [
        {
          "id": 44,
          "name": "addButton",
          "kind": 32,
          "kindString": "Variable",
          "flags": {},
          "sources": [
            {
              "fileName": "e2e/menu.e2e-spec.ts",
              "line": 24,
              "character": 15
            }
          ],
          "type": {
            "type": "reference",
            "name": "By"
          },
          "defaultValue": " by.css('#addBtn')"
        },
        {
          "id": 30,
          "name": "group",
          "kind": 32,
          "kindString": "Variable",
          "flags": {},
          "sources": [
            {
              "fileName": "e2e/menu.e2e-spec.ts",
              "line": 10,
              "character": 11
            }
          ],
          "type": {
            "type": "reference",
            "name": "By"
          },
          "defaultValue": " by.css('nga-menu ul li:nth-child(1) span')"
        },
        {
          "id": 45,
          "name": "homeButton",
          "kind": 32,
          "kindString": "Variable",
          "flags": {},
          "sources": [
            {
              "fileName": "e2e/menu.e2e-spec.ts",
              "line": 25,
              "character": 16
            }
          ],
          "type": {
            "type": "reference",
            "name": "By"
          },
          "defaultValue": " by.css('#homeBtn')"
        },
        {
          "id": 31,
          "name": "menu1",
          "kind": 32,
          "kindString": "Variable",
          "flags": {},
          "sources": [
            {
              "fileName": "e2e/menu.e2e-spec.ts",
              "line": 11,
              "character": 11
            }
          ],
          "type": {
            "type": "reference",
            "name": "By"
          },
          "defaultValue": " by.css('nga-menu ul li:nth-child(2) a')"
        },
        {
          "id": 32,
          "name": "menu2",
          "kind": 32,
          "kindString": "Variable",
          "flags": {},
          "sources": [
            {
              "fileName": "e2e/menu.e2e-spec.ts",
              "line": 12,
              "character": 11
            }
          ],
          "type": {
            "type": "reference",
            "name": "By"
          },
          "defaultValue": " by.css('nga-menu ul li:nth-child(3) a')"
        },
        {
          "id": 33,
          "name": "menu3",
          "kind": 32,
          "kindString": "Variable",
          "flags": {},
          "sources": [
            {
              "fileName": "e2e/menu.e2e-spec.ts",
              "line": 13,
              "character": 11
            }
          ],
          "type": {
            "type": "reference",
            "name": "By"
          },
          "defaultValue": " by.css('nga-menu ul li:nth-child(4) a')"
        },
        {
          "id": 35,
          "name": "menu31",
          "kind": 32,
          "kindString": "Variable",
          "flags": {},
          "sources": [
            {
              "fileName": "e2e/menu.e2e-spec.ts",
              "line": 15,
              "character": 12
            }
          ],
          "type": {
            "type": "reference",
            "name": "By"
          },
          "defaultValue": " by.css('nga-menu ul li:nth-child(4) ul li:nth-child(1) a')"
        },
        {
          "id": 36,
          "name": "menu32",
          "kind": 32,
          "kindString": "Variable",
          "flags": {},
          "sources": [
            {
              "fileName": "e2e/menu.e2e-spec.ts",
              "line": 16,
              "character": 12
            }
          ],
          "type": {
            "type": "reference",
            "name": "By"
          },
          "defaultValue": " by.css('nga-menu ul li:nth-child(4) ul li:nth-child(2) a')"
        },
        {
          "id": 37,
          "name": "menu33",
          "kind": 32,
          "kindString": "Variable",
          "flags": {},
          "sources": [
            {
              "fileName": "e2e/menu.e2e-spec.ts",
              "line": 17,
              "character": 12
            }
          ],
          "type": {
            "type": "reference",
            "name": "By"
          },
          "defaultValue": " by.css('nga-menu ul li:nth-child(4) ul li:nth-child(3) a')"
        },
        {
          "id": 39,
          "name": "menu331",
          "kind": 32,
          "kindString": "Variable",
          "flags": {},
          "sources": [
            {
              "fileName": "e2e/menu.e2e-spec.ts",
              "line": 19,
              "character": 13
            }
          ],
          "type": {
            "type": "reference",
            "name": "By"
          },
          "defaultValue": " by.css('nga-menu ul li:nth-child(4) ul li:nth-child(3) ul li:nth-child(1) a')"
        },
        {
          "id": 40,
          "name": "menu332",
          "kind": 32,
          "kindString": "Variable",
          "flags": {},
          "sources": [
            {
              "fileName": "e2e/menu.e2e-spec.ts",
              "line": 20,
              "character": 13
            }
          ],
          "type": {
            "type": "reference",
            "name": "By"
          },
          "defaultValue": " by.css('nga-menu ul li:nth-child(4) ul li:nth-child(3) ul li:nth-child(2) a')"
        },
        {
          "id": 41,
          "name": "menu333",
          "kind": 32,
          "kindString": "Variable",
          "flags": {},
          "sources": [
            {
              "fileName": "e2e/menu.e2e-spec.ts",
              "line": 21,
              "character": 13
            }
          ],
          "type": {
            "type": "reference",
            "name": "By"
          },
          "defaultValue": " by.css('nga-menu ul li:nth-child(4) ul li:nth-child(3) ul li:nth-child(3) a')"
        },
        {
          "id": 38,
          "name": "menu33SubMenu",
          "kind": 32,
          "kindString": "Variable",
          "flags": {},
          "sources": [
            {
              "fileName": "e2e/menu.e2e-spec.ts",
              "line": 18,
              "character": 19
            }
          ],
          "type": {
            "type": "reference",
            "name": "By"
          },
          "defaultValue": " by.css('nga-menu ul li:nth-child(4) ul li:nth-child(3) ul')"
        },
        {
          "id": 34,
          "name": "menu3SubMenu",
          "kind": 32,
          "kindString": "Variable",
          "flags": {},
          "sources": [
            {
              "fileName": "e2e/menu.e2e-spec.ts",
              "line": 14,
              "character": 18
            }
          ],
          "type": {
            "type": "reference",
            "name": "By"
          },
          "defaultValue": " by.css('nga-menu ul li:nth-child(4) ul')"
        },
        {
          "id": 42,
          "name": "menu4",
          "kind": 32,
          "kindString": "Variable",
          "flags": {},
          "sources": [
            {
              "fileName": "e2e/menu.e2e-spec.ts",
              "line": 22,
              "character": 11
            }
          ],
          "type": {
            "type": "reference",
            "name": "By"
          },
          "defaultValue": " by.css('nga-menu ul li:nth-child(5) a')"
        },
        {
          "id": 43,
          "name": "newMenu",
          "kind": 32,
          "kindString": "Variable",
          "flags": {},
          "sources": [
            {
              "fileName": "e2e/menu.e2e-spec.ts",
              "line": 23,
              "character": 13
            }
          ],
          "type": {
            "type": "reference",
            "name": "By"
          },
          "defaultValue": " by.css('nga-menu ul li:nth-child(7) a')"
        }
      ],
      "groups": [
        {
          "title": "Variables",
          "kind": 32,
          "children": [
            44,
            30,
            45,
            31,
            32,
            33,
            35,
            36,
            37,
            39,
            40,
            41,
            38,
            34,
            42,
            43
          ]
        }
      ],
      "sources": [
        {
          "fileName": "e2e/menu.e2e-spec.ts",
          "line": 1,
          "character": 0
        }
      ]
    },
    {
      "id": 46,
      "name": "\"e2e/route-tabset.e2e-spec\"",
      "kind": 1,
      "kindString": "External module",
      "flags": {
        "isExported": true
      },
      "originalName": "/Users/nixa/Development/Projects/Akveo/ng2-admin/e2e/route-tabset.e2e-spec.ts",
      "sources": [
        {
          "fileName": "e2e/route-tabset.e2e-spec.ts",
          "line": 1,
          "character": 0
        }
      ]
    },
    {
      "id": 47,
      "name": "\"e2e/sidebar-one.e2e-spec\"",
      "kind": 1,
      "kindString": "External module",
      "flags": {
        "isExported": true
      },
      "originalName": "/Users/nixa/Development/Projects/Akveo/ng2-admin/e2e/sidebar-one.e2e-spec.ts",
      "sources": [
        {
          "fileName": "e2e/sidebar-one.e2e-spec.ts",
          "line": 1,
          "character": 0
        }
      ]
    },
    {
      "id": 48,
      "name": "\"e2e/sidebar-three.e2e-spec\"",
      "kind": 1,
      "kindString": "External module",
      "flags": {
        "isExported": true
      },
      "originalName": "/Users/nixa/Development/Projects/Akveo/ng2-admin/e2e/sidebar-three.e2e-spec.ts",
      "sources": [
        {
          "fileName": "e2e/sidebar-three.e2e-spec.ts",
          "line": 1,
          "character": 0
        }
      ]
    },
    {
      "id": 49,
      "name": "\"e2e/sidebar-two.e2e-spec\"",
      "kind": 1,
      "kindString": "External module",
      "flags": {
        "isExported": true
      },
      "originalName": "/Users/nixa/Development/Projects/Akveo/ng2-admin/e2e/sidebar-two.e2e-spec.ts",
      "sources": [
        {
          "fileName": "e2e/sidebar-two.e2e-spec.ts",
          "line": 1,
          "character": 0
        }
      ]
    },
    {
      "id": 50,
      "name": "\"e2e/sidebar.e2e-spec\"",
      "kind": 1,
      "kindString": "External module",
      "flags": {
        "isExported": true
      },
      "originalName": "/Users/nixa/Development/Projects/Akveo/ng2-admin/e2e/sidebar.e2e-spec.ts",
      "sources": [
        {
          "fileName": "e2e/sidebar.e2e-spec.ts",
          "line": 1,
          "character": 0
        }
      ]
    },
    {
      "id": 51,
      "name": "\"e2e/tabset.e2e-spec\"",
      "kind": 1,
      "kindString": "External module",
      "flags": {
        "isExported": true
      },
      "originalName": "/Users/nixa/Development/Projects/Akveo/ng2-admin/e2e/tabset.e2e-spec.ts",
      "sources": [
        {
          "fileName": "e2e/tabset.e2e-spec.ts",
          "line": 1,
          "character": 0
        }
      ]
    },
    {
      "id": 52,
      "name": "\"e2e/user.e2e-spec\"",
      "kind": 1,
      "kindString": "External module",
      "flags": {
        "isExported": true
      },
      "originalName": "/Users/nixa/Development/Projects/Akveo/ng2-admin/e2e/user.e2e-spec.ts",
      "sources": [
        {
          "fileName": "e2e/user.e2e-spec.ts",
          "line": 1,
          "character": 0
        }
      ]
    },
    {
      "id": 488,
      "name": "\"src/app/app.component\"",
      "kind": 1,
      "kindString": "External module",
      "flags": {
        "isExported": true
      },
      "originalName": "/Users/nixa/Development/Projects/Akveo/ng2-admin/src/app/app.component.ts",
      "children": [
        {
          "id": 489,
          "name": "NgaAppComponent",
          "kind": 128,
          "kindString": "Class",
          "flags": {
            "isExported": true
          },
          "decorators": [
            {
              "name": "Component",
              "type": {
                "type": "reference",
                "name": "Component"
              },
              "arguments": {
                "obj": "{\n  selector: 'nga-app-root',\n  styleUrls: ['./app.component.default.scss', './app.component.blue.scss'],\n  template: `<router-outlet></router-outlet>`,\n}"
              }
            }
          ],
          "sources": [
            {
              "fileName": "src/app/app.component.ts",
              "line": 13,
              "character": 28
            }
          ]
        }
      ],
      "groups": [
        {
          "title": "Classes",
          "kind": 128,
          "children": [
            489
          ]
        }
      ],
      "sources": [
        {
          "fileName": "src/app/app.component.ts",
          "line": 1,
          "character": 0
        }
      ]
    },
    {
      "id": 1177,
      "name": "\"src/app/app.module\"",
      "kind": 1,
      "kindString": "External module",
      "flags": {
        "isExported": true
      },
      "originalName": "/Users/nixa/Development/Projects/Akveo/ng2-admin/src/app/app.module.ts",
      "children": [
        {
          "id": 1178,
          "name": "AppModule",
          "kind": 128,
          "kindString": "Class",
          "flags": {
            "isExported": true
          },
          "decorators": [
            {
              "name": "NgModule",
              "type": {
                "type": "reference",
                "name": "NgModule"
              },
              "arguments": {
                "obj": "{\n  imports: [\n    BrowserModule,\n    FormsModule,\n    HttpModule,\n    RouterModule.forRoot(routes, { useHash: true }),\n    NgaThemeModule.forRoot({ name: 'default' }),\n    NgaCardModule,\n    NgaLayoutModule,\n    NgaMenuModule.forRoot(),\n    NgaRouteTabsetModule,\n    NgaSidebarModule.forRoot(),\n    NgaTabsetModule,\n    NgaUserModule,\n    NgaAuthModule.forRoot({\n      providers: {\n        //\n        // email: {\n        //   service: NgaDummyAuthProvider,\n        //   config: {\n        //     alwaysFail: true,\n        //     delay: 1000,\n        //   },\n        // },\n        email: {\n          service: NgaEmailPassAuthProvider,\n          config: {\n            login: {\n              endpoint: 'http://localhost:4400/api/auth/login',\n            },\n            register: {\n              endpoint: 'http://localhost:4400/api/auth/register',\n            },\n            logout: {\n              endpoint: 'http://localhost:4400/api/auth/logout',\n              redirect: {\n                success: '/auth/login',\n                failure: '/auth/login',\n              },\n            },\n            requestPass: {\n              endpoint: 'http://localhost:4400/api/auth/request-pass',\n              redirect: {\n                success: '/auth/reset-password',\n              },\n            },\n            resetPass: {\n              endpoint: 'http://localhost:4400/api/auth/reset-pass',\n              redirect: {\n                success: '/auth/login',\n              },\n            },\n          },\n        },\n      },\n    }),\n  ],\n  declarations: [\n    ...NGA_TEST_COMPONENTS,\n  ],\n  providers: [],\n  bootstrap: [NgaAppComponent],\n}"
              }
            }
          ],
          "sources": [
            {
              "fileName": "src/app/app.module.ts",
              "line": 147,
              "character": 22
            }
          ]
        },
        {
          "id": 1179,
          "name": "NGA_TEST_COMPONENTS",
          "kind": 32,
          "kindString": "Variable",
          "flags": {},
          "sources": [
            {
              "fileName": "src/app/app.module.ts",
              "line": 56,
              "character": 25
            }
          ],
          "type": {
            "type": "reference",
            "name": "Array",
            "typeArguments": [
              {
                "type": "union",
                "types": [
                  {
                    "type": "reference",
                    "name": "NgaAppComponent",
                    "id": 489
                  },
                  {
                    "type": "reference",
                    "name": "NgaTabsetTestComponent",
                    "id": 515
                  },
                  {
                    "type": "reference",
                    "name": "NgaSidebarTestComponent",
                    "id": 529
                  },
                  {
                    "type": "reference",
                    "name": "NgaMenuTestComponent",
                    "id": 593
                  },
                  {
                    "type": "reference",
                    "name": "NgaThemeChangeTestComponent",
                    "id": 506
                  }
                ]
              }
            ]
          },
          "defaultValue": " [\n  NgaAppComponent,\n  NgaCardTestComponent,\n  NgaLayoutTestComponent,\n  NgaLayoutHeaderTestComponent,\n  NgaLayoutFooterTestComponent,\n  NgaTabsetTestComponent,\n  NgaSidebarTestComponent,\n  NgaSidebarTestOneComponent,\n  NgaSidebarTestTwoComponent,\n  NgaSidebarTestThreeComponent,\n  NgaRouteTabsetTestComponent,\n  NgaRouteTabsetTestChild1Component,\n  NgaRouteTabsetTestChild2Component,\n  NgaMenuTestComponent,\n  NgaMenuItem1Component,\n  NgaMenuItem2Component,\n  NgaMenuItem3Component,\n  NgaMenuItem31Component,\n  NgaMenuItem32Component,\n  NgaMenuItem33Component,\n  NgaMenuItem331Component,\n  NgaMenuItem332Component,\n  NgaMenuItem4Component,\n  NgaUserTestComponent,\n  NgaThemeChangeTestComponent,\n]"
        }
      ],
      "groups": [
        {
          "title": "Classes",
          "kind": 128,
          "children": [
            1178
          ]
        },
        {
          "title": "Variables",
          "kind": 32,
          "children": [
            1179
          ]
        }
      ],
      "sources": [
        {
          "fileName": "src/app/app.module.ts",
          "line": 1,
          "character": 0
        }
      ]
    },
    {
      "id": 1175,
      "name": "\"src/app/app.routes\"",
      "kind": 1,
      "kindString": "External module",
      "flags": {
        "isExported": true
      },
      "originalName": "/Users/nixa/Development/Projects/Akveo/ng2-admin/src/app/app.routes.ts",
      "children": [
        {
          "id": 1176,
          "name": "routes",
          "kind": 32,
          "kindString": "Variable",
          "flags": {
            "isExported": true
          },
          "sources": [
            {
              "fileName": "src/app/app.routes.ts",
              "line": 37,
              "character": 19
            }
          ],
          "type": {
            "type": "reference",
            "name": "Routes"
          },
          "defaultValue": " [\n  {\n    path: '',\n    component: NgaCardTestComponent,\n  },\n  {\n    path: 'layout',\n    component: NgaLayoutTestComponent,\n  },\n  {\n    path: 'layout/header',\n    component: NgaLayoutHeaderTestComponent,\n  },\n  {\n    path: 'layout/footer',\n    component: NgaLayoutFooterTestComponent,\n  },\n  {\n    path: 'layout/change-theme',\n    component: NgaThemeChangeTestComponent,\n  },\n  {\n    path: 'tabset',\n    component: NgaTabsetTestComponent,\n  },\n  {\n    path: 'tabset/:tab',\n    component: NgaTabsetTestComponent,\n  },\n  {\n    path: 'sidebar',\n    component: NgaSidebarTestComponent,\n  },\n  {\n    path: 'sidebar/one',\n    component: NgaSidebarTestOneComponent,\n  },\n  {\n    path: 'sidebar/two',\n    component: NgaSidebarTestTwoComponent,\n  },\n  {\n    path: 'sidebar/three',\n    component: NgaSidebarTestThreeComponent,\n  },\n  {\n    path: 'route-tabset',\n    component: NgaRouteTabsetTestComponent,\n    children: [\n      {\n        path: '',\n        redirectTo: 'tab1',\n        pathMatch: 'full',\n      },\n      {\n        path: 'tab1',\n        component: NgaRouteTabsetTestChild1Component,\n      },\n      {\n        path: 'tab2',\n        component: NgaRouteTabsetTestChild2Component,\n      },\n    ],\n  },\n  {\n    path: 'menu',\n    component: NgaMenuTestComponent,\n    children: [\n      {\n        path: '',\n        redirectTo: '1',\n        pathMatch: 'full',\n      },\n      {\n        path: '1',\n        component: NgaMenuItem1Component,\n      },\n      {\n        path: '2',\n        component: NgaMenuItem2Component,\n      },\n      {\n        path: '3',\n        component: NgaMenuItem3Component,\n        children: [\n          {\n            path: '',\n            redirectTo: '1',\n            pathMatch: 'full',\n          },\n          {\n            path: '1',\n            component: NgaMenuItem31Component,\n          },\n          {\n            path: '2',\n            component: NgaMenuItem32Component,\n          },\n          {\n            path: '3',\n            component: NgaMenuItem33Component,\n            children: [\n              {\n                path: '',\n                redirectTo: '1',\n                pathMatch: 'full',\n              },\n              {\n                path: '1',\n                component: NgaMenuItem331Component,\n              },\n              {\n                path: '2',\n                component: NgaMenuItem332Component,\n              },\n            ],\n          },\n        ],\n      },\n      {\n        path: '4',\n        component: NgaMenuItem4Component,\n      },\n    ],\n  },\n  {\n    path: 'user',\n    component: NgaUserTestComponent,\n  },\n  {\n    path: 'auth',\n    loadChildren: 'framework/auth/auth.module#NgaAuthModule',\n  },\n  {\n    path: '**',\n    component: NgaCardTestComponent,\n  },\n]"
        }
      ],
      "groups": [
        {
          "title": "Variables",
          "kind": 32,
          "children": [
            1176
          ]
        }
      ],
      "sources": [
        {
          "fileName": "src/app/app.routes.ts",
          "line": 1,
          "character": 0
        }
      ]
    },
    {
      "id": 490,
      "name": "\"src/app/card-test/card-test.component\"",
      "kind": 1,
      "kindString": "External module",
      "flags": {
        "isExported": true
      },
      "originalName": "/Users/nixa/Development/Projects/Akveo/ng2-admin/src/app/card-test/card-test.component.ts",
      "children": [
        {
          "id": 491,
          "name": "NgaCardTestComponent",
          "kind": 128,
          "kindString": "Class",
          "flags": {
            "isExported": true
          },
          "decorators": [
            {
              "name": "Component",
              "type": {
                "type": "reference",
                "name": "Component"
              },
              "arguments": {
                "obj": "{\n  selector: 'nga-card-test',\n  template: `\n    <nga-layout>\n      <nga-layout-column>\n        <nga-card>\n          <nga-card-header>\n            <span>Header</span>\n          </nga-card-header>\n          <nga-card-body>\n            <span>Body</span>\n          </nga-card-body>\n          <nga-card-footer>\n            <span>Footer</span>\n          </nga-card-footer>\n        </nga-card>\n        <nga-card size=\"small\">\n          <nga-card-header>\n            <span>Header</span>\n          </nga-card-header>\n          <nga-card-body>\n            <span>Body</span>\n          </nga-card-body>\n          <nga-card-footer>\n            <span>Footer</span>\n          </nga-card-footer>\n        </nga-card>\n        <nga-card size=\"xsmall\">\n          <nga-card-header>\n            <span>Header</span>\n          </nga-card-header>\n          <nga-card-body>\n            <span>Body</span>\n          </nga-card-body>\n          <nga-card-footer>\n            <span>Footer</span>\n          </nga-card-footer>\n        </nga-card>\n        <nga-card size=\"medium\">\n          <nga-card-header>\n            <span>Header</span>\n          </nga-card-header>\n          <nga-card-body>\n            <span>Body</span>\n          </nga-card-body>\n          <nga-card-footer>\n            <span>Footer</span>\n          </nga-card-footer>\n        </nga-card>\n        <nga-card size=\"xmedium\">\n          <nga-card-header>\n            <span>Header</span>\n          </nga-card-header>\n          <nga-card-body>\n            <span>Body</span>\n          </nga-card-body>\n          <nga-card-footer>\n            <span>Footer</span>\n          </nga-card-footer>\n        </nga-card>\n        <nga-card size=\"large\">\n          <nga-card-header>\n            <span>Header</span>\n          </nga-card-header>\n          <nga-card-body>\n            <span>Body</span>\n          </nga-card-body>\n          <nga-card-footer>\n            <span>Footer</span>\n          </nga-card-footer>\n        </nga-card>\n        <nga-card status=\"primary\">\n          <nga-card-header>\n            <span>Header</span>\n          </nga-card-header>\n          <nga-card-body>\n            <span>Body</span>\n          </nga-card-body>\n          <nga-card-footer>\n            <span>Footer</span>\n          </nga-card-footer>\n        </nga-card>\n        <nga-card status=\"success\">\n          <nga-card-header>\n            <span>Header</span>\n          </nga-card-header>\n          <nga-card-body>\n            <span>Body</span>\n          </nga-card-body>\n          <nga-card-footer>\n            <span>Footer</span>\n          </nga-card-footer>\n        </nga-card>\n        <nga-card status=\"info\">\n          <nga-card-header>\n            <span>Header</span>\n          </nga-card-header>\n          <nga-card-body>\n            <span>Body</span>\n          </nga-card-body>\n          <nga-card-footer>\n            <span>Footer</span>\n          </nga-card-footer>\n        </nga-card>\n        <nga-card status=\"warning\">\n          <nga-card-header>\n            <span>Header</span>\n          </nga-card-header>\n          <nga-card-body>\n            <span>Body</span>\n          </nga-card-body>\n          <nga-card-footer>\n            <span>Footer</span>\n          </nga-card-footer>\n        </nga-card>\n        <nga-card status=\"danger\">\n          <nga-card-header>\n            <span>Header</span>\n          </nga-card-header>\n          <nga-card-body>\n            <span>Body</span>\n          </nga-card-body>\n          <nga-card-footer>\n            <span>Footer</span>\n          </nga-card-footer>\n        </nga-card>\n        <nga-card status=\"active\">\n          <nga-card-header>\n            <span>Header</span>\n          </nga-card-header>\n          <nga-card-body>\n            <span>Body</span>\n          </nga-card-body>\n          <nga-card-footer>\n            <span>Footer</span>\n          </nga-card-footer>\n        </nga-card>\n        <nga-card status=\"disabled\">\n          <nga-card-header>\n            <span>Header</span>\n          </nga-card-header>\n          <nga-card-body>\n            <span>Body</span>\n          </nga-card-body>\n          <nga-card-footer>\n            <span>Footer</span>\n          </nga-card-footer>\n        </nga-card>\n        <nga-card *ngFor=\"let card of cards\" [size]=\"card.size\" [status]=\"card.status\">\n          <nga-card-header>\n            <span>Header</span>\n          </nga-card-header>\n          <nga-card-body>\n            <span>Body</span>\n          </nga-card-body>\n          <nga-card-footer>\n            <span>Footer</span>\n          </nga-card-footer>\n        </nga-card>\n      </nga-layout-column>\n    </nga-layout>\n  `,\n}"
              }
            }
          ],
          "children": [
            {
              "id": 495,
              "name": "constructor",
              "kind": 512,
              "kindString": "Constructor",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 496,
                  "name": "new NgaCardTestComponent",
                  "kind": 16384,
                  "kindString": "Constructor signature",
                  "flags": {},
                  "type": {
                    "type": "reference",
                    "name": "NgaCardTestComponent",
                    "id": 491
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/app/card-test/card-test.component.ts",
                  "line": 176,
                  "character": 15
                }
              ]
            },
            {
              "id": 494,
              "name": "cards",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isExported": true
              },
              "sources": [
                {
                  "fileName": "src/app/card-test/card-test.component.ts",
                  "line": 176,
                  "character": 7
                }
              ],
              "type": {
                "type": "instrinct",
                "isArray": true,
                "name": "any"
              }
            },
            {
              "id": 492,
              "name": "sizes",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isExported": true
              },
              "sources": [
                {
                  "fileName": "src/app/card-test/card-test.component.ts",
                  "line": 173,
                  "character": 7
                }
              ],
              "type": {
                "type": "reference",
                "name": "Array",
                "typeArguments": [
                  {
                    "type": "instrinct",
                    "name": "string"
                  }
                ]
              },
              "defaultValue": " ['small', 'xsmall', 'medium', 'xmedium', 'large']"
            },
            {
              "id": 493,
              "name": "statuses",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isExported": true
              },
              "sources": [
                {
                  "fileName": "src/app/card-test/card-test.component.ts",
                  "line": 174,
                  "character": 10
                }
              ],
              "type": {
                "type": "reference",
                "name": "Array",
                "typeArguments": [
                  {
                    "type": "instrinct",
                    "name": "string"
                  }
                ]
              },
              "defaultValue": " ['primary', 'success', 'info', 'warning', 'danger', 'active', 'disabled']"
            },
            {
              "id": 497,
              "name": "prepareCards",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isPrivate": true,
                "isExported": true
              },
              "signatures": [
                {
                  "id": 498,
                  "name": "prepareCards",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "type": {
                    "type": "instrinct",
                    "isArray": true,
                    "name": "any"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/app/card-test/card-test.component.ts",
                  "line": 182,
                  "character": 22
                }
              ]
            }
          ],
          "groups": [
            {
              "title": "Constructors",
              "kind": 512,
              "children": [
                495
              ]
            },
            {
              "title": "Properties",
              "kind": 1024,
              "children": [
                494,
                492,
                493
              ]
            },
            {
              "title": "Methods",
              "kind": 2048,
              "children": [
                497
              ]
            }
          ],
          "sources": [
            {
              "fileName": "src/app/card-test/card-test.component.ts",
              "line": 171,
              "character": 33
            }
          ]
        }
      ],
      "groups": [
        {
          "title": "Classes",
          "kind": 128,
          "children": [
            491
          ]
        }
      ],
      "sources": [
        {
          "fileName": "src/app/card-test/card-test.component.ts",
          "line": 1,
          "character": 0
        }
      ]
    },
    {
      "id": 503,
      "name": "\"src/app/layout-test/layout-footer-test.component\"",
      "kind": 1,
      "kindString": "External module",
      "flags": {
        "isExported": true
      },
      "originalName": "/Users/nixa/Development/Projects/Akveo/ng2-admin/src/app/layout-test/layout-footer-test.component.ts",
      "children": [
        {
          "id": 504,
          "name": "NgaLayoutFooterTestComponent",
          "kind": 128,
          "kindString": "Class",
          "flags": {
            "isExported": true
          },
          "decorators": [
            {
              "name": "Component",
              "type": {
                "type": "reference",
                "name": "Component"
              },
              "arguments": {
                "obj": "{\n  selector: 'nga-layout-footer-test',\n  template: `\n    <nga-layout>\n      <nga-layout-footer fixed>\n        &copy; Akveo 2017\n      </nga-layout-footer>\n    </nga-layout>\n`,\n}"
              }
            }
          ],
          "sources": [
            {
              "fileName": "src/app/layout-test/layout-footer-test.component.ts",
              "line": 18,
              "character": 41
            }
          ]
        }
      ],
      "groups": [
        {
          "title": "Classes",
          "kind": 128,
          "children": [
            504
          ]
        }
      ],
      "sources": [
        {
          "fileName": "src/app/layout-test/layout-footer-test.component.ts",
          "line": 1,
          "character": 0
        }
      ]
    },
    {
      "id": 501,
      "name": "\"src/app/layout-test/layout-header-test.component\"",
      "kind": 1,
      "kindString": "External module",
      "flags": {
        "isExported": true
      },
      "originalName": "/Users/nixa/Development/Projects/Akveo/ng2-admin/src/app/layout-test/layout-header-test.component.ts",
      "children": [
        {
          "id": 502,
          "name": "NgaLayoutHeaderTestComponent",
          "kind": 128,
          "kindString": "Class",
          "flags": {
            "isExported": true
          },
          "decorators": [
            {
              "name": "Component",
              "type": {
                "type": "reference",
                "name": "Component"
              },
              "arguments": {
                "obj": "{\n  selector: 'nga-layout-header-test',\n  template: `\n    <nga-layout>\n      <nga-layout-header fixed>\n        <a class=\"navbar-brand\" href=\"#\">ngx-admin</a>\n      </nga-layout-header>\n    </nga-layout>\n`,\n}"
              }
            }
          ],
          "sources": [
            {
              "fileName": "src/app/layout-test/layout-header-test.component.ts",
              "line": 18,
              "character": 41
            }
          ]
        }
      ],
      "groups": [
        {
          "title": "Classes",
          "kind": 128,
          "children": [
            502
          ]
        }
      ],
      "sources": [
        {
          "fileName": "src/app/layout-test/layout-header-test.component.ts",
          "line": 1,
          "character": 0
        }
      ]
    },
    {
      "id": 499,
      "name": "\"src/app/layout-test/layout-test.component\"",
      "kind": 1,
      "kindString": "External module",
      "flags": {
        "isExported": true
      },
      "originalName": "/Users/nixa/Development/Projects/Akveo/ng2-admin/src/app/layout-test/layout-test.component.ts",
      "children": [
        {
          "id": 500,
          "name": "NgaLayoutTestComponent",
          "kind": 128,
          "kindString": "Class",
          "flags": {
            "isExported": true
          },
          "decorators": [
            {
              "name": "Component",
              "type": {
                "type": "reference",
                "name": "Component"
              },
              "arguments": {
                "obj": "{\n  selector: 'nga-layout-test',\n  styles: [\n    `\n      :host /deep/ nga-layout-column {\n        background-color: #fb75ff;\n      }\n      :host /deep/ nga-layout-column.right {\n        background-color: #aeff34;\n      }\n      :host /deep/ nga-layout-column.left {\n        background-color: #76ecff;\n      }\n\n    `,\n  ],\n  template: `\n    <nga-layout id=\"layout-fluid\">\n      <nga-layout-header fixed>\n        <a href=\"#\" class=\"navbar-brand\">Akveo</a>\n      </nga-layout-header>\n\n      <nga-layout-column left>\n        Left\n      </nga-layout-column>\n      <nga-layout-column>\n        Center\n      </nga-layout-column>\n      <nga-layout-column>\n        Right\n      </nga-layout-column>\n\n      <nga-layout-footer>\n        &copy; Akveo 2017\n      </nga-layout-footer>\n    </nga-layout>\n\n    <nga-layout center id=\"layout-center\">\n      <nga-layout-header fixed>\n        <a href=\"#\" class=\"navbar-brand\">Akveo</a>\n      </nga-layout-header>\n\n      <nga-layout-column left>\n        Left\n      </nga-layout-column>\n      <nga-layout-column>\n        Center\n      </nga-layout-column>\n      <nga-layout-column>\n        Right\n      </nga-layout-column>\n\n      <nga-layout-footer fixed>\n        &copy; Akveo 2017\n      </nga-layout-footer>\n    </nga-layout>\n`,\n}"
              }
            }
          ],
          "sources": [
            {
              "fileName": "src/app/layout-test/layout-test.component.ts",
              "line": 66,
              "character": 35
            }
          ]
        }
      ],
      "groups": [
        {
          "title": "Classes",
          "kind": 128,
          "children": [
            500
          ]
        }
      ],
      "sources": [
        {
          "fileName": "src/app/layout-test/layout-test.component.ts",
          "line": 1,
          "character": 0
        }
      ]
    },
    {
      "id": 505,
      "name": "\"src/app/layout-test/theme-change-test.component\"",
      "kind": 1,
      "kindString": "External module",
      "flags": {
        "isExported": true
      },
      "originalName": "/Users/nixa/Development/Projects/Akveo/ng2-admin/src/app/layout-test/theme-change-test.component.ts",
      "children": [
        {
          "id": 506,
          "name": "NgaThemeChangeTestComponent",
          "kind": 128,
          "kindString": "Class",
          "flags": {
            "isExported": true
          },
          "decorators": [
            {
              "name": "Component",
              "type": {
                "type": "reference",
                "name": "Component"
              },
              "arguments": {
                "obj": "{\n  selector: 'nga-change-theme-test',\n  template: `\n    <nga-layout>\n      <nga-layout-header fixed>\n        <a href=\"#\" class=\"navbar-brand\">Akveo</a>\n        <button id=\"change-theme\" (click)=\"changeTheme()\">Change Theme</button>\n      </nga-layout-header>\n\n      <nga-sidebar right>\n        <nga-sidebar-content>\n          Sidebar content\n        </nga-sidebar-content>\n      </nga-sidebar>\n\n      <nga-layout-column>\n        <nga-card>\n          <nga-card-header>Hello</nga-card-header>\n          <nga-card-body>\n            Some Test content\n          </nga-card-body>\n        </nga-card>\n      </nga-layout-column>\n\n\n      <nga-layout-footer fixed>\n        &copy; Akveo 2017\n      </nga-layout-footer>\n    </nga-layout>\n`,\n}"
              }
            }
          ],
          "children": [
            {
              "id": 508,
              "name": "constructor",
              "kind": 512,
              "kindString": "Constructor",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 510,
                  "name": "new NgaThemeChangeTestComponent",
                  "kind": 16384,
                  "kindString": "Constructor signature",
                  "flags": {},
                  "parameters": [
                    {
                      "id": 511,
                      "name": "themeService",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {},
                      "type": {
                        "type": "reference",
                        "name": "NgaThemeService",
                        "id": 74
                      }
                    }
                  ],
                  "type": {
                    "type": "reference",
                    "name": "NgaThemeChangeTestComponent",
                    "id": 506
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/app/layout-test/theme-change-test.component.ts",
                  "line": 43,
                  "character": 27
                }
              ]
            },
            {
              "id": 507,
              "name": "currentTheme",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isExported": true
              },
              "sources": [
                {
                  "fileName": "src/app/layout-test/theme-change-test.component.ts",
                  "line": 43,
                  "character": 14
                }
              ],
              "type": {
                "type": "instrinct",
                "name": "string"
              },
              "defaultValue": "\"default\""
            },
            {
              "id": 509,
              "name": "themeService",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isPrivate": true,
                "isConstructorProperty": true,
                "isExported": true
              },
              "sources": [
                {
                  "fileName": "src/app/layout-test/theme-change-test.component.ts",
                  "line": 45,
                  "character": 34
                }
              ],
              "type": {
                "type": "reference",
                "name": "NgaThemeService",
                "id": 74
              }
            },
            {
              "id": 512,
              "name": "changeTheme",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 513,
                  "name": "changeTheme",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "type": {
                    "type": "instrinct",
                    "name": "void"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/app/layout-test/theme-change-test.component.ts",
                  "line": 47,
                  "character": 13
                }
              ]
            }
          ],
          "groups": [
            {
              "title": "Constructors",
              "kind": 512,
              "children": [
                508
              ]
            },
            {
              "title": "Properties",
              "kind": 1024,
              "children": [
                507,
                509
              ]
            },
            {
              "title": "Methods",
              "kind": 2048,
              "children": [
                512
              ]
            }
          ],
          "sources": [
            {
              "fileName": "src/app/layout-test/theme-change-test.component.ts",
              "line": 41,
              "character": 40
            }
          ]
        }
      ],
      "groups": [
        {
          "title": "Classes",
          "kind": 128,
          "children": [
            506
          ]
        }
      ],
      "sources": [
        {
          "fileName": "src/app/layout-test/theme-change-test.component.ts",
          "line": 1,
          "character": 0
        }
      ]
    },
    {
      "id": 547,
      "name": "\"src/app/menu-test/menu-test.component\"",
      "kind": 1,
      "kindString": "External module",
      "flags": {
        "isExported": true
      },
      "originalName": "/Users/nixa/Development/Projects/Akveo/ng2-admin/src/app/menu-test/menu-test.component.ts",
      "children": [
        {
          "id": 548,
          "name": "NgaMenuItem1Component",
          "kind": 128,
          "kindString": "Class",
          "flags": {
            "isExported": true
          },
          "decorators": [
            {
              "name": "Component",
              "type": {
                "type": "reference",
                "name": "Component"
              },
              "arguments": {
                "obj": "{\n  selector: 'nga-menu-item1',\n  template: `\n    <h1>Menu Item #1</h1>\n  `,\n}"
              }
            }
          ],
          "children": [
            {
              "id": 549,
              "name": "constructor",
              "kind": 512,
              "kindString": "Constructor",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 550,
                  "name": "new NgaMenuItem1Component",
                  "kind": 16384,
                  "kindString": "Constructor signature",
                  "flags": {},
                  "type": {
                    "type": "reference",
                    "name": "NgaMenuItem1Component",
                    "id": 548
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/app/menu-test/menu-test.component.ts",
                  "line": 19,
                  "character": 54
                }
              ]
            },
            {
              "id": 551,
              "name": "ngOnInit",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 552,
                  "name": "ngOnInit",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "type": {
                    "type": "instrinct",
                    "name": "void"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/app/menu-test/menu-test.component.ts",
                  "line": 22,
                  "character": 10
                }
              ]
            }
          ],
          "groups": [
            {
              "title": "Constructors",
              "kind": 512,
              "children": [
                549
              ]
            },
            {
              "title": "Methods",
              "kind": 2048,
              "children": [
                551
              ]
            }
          ],
          "sources": [
            {
              "fileName": "src/app/menu-test/menu-test.component.ts",
              "line": 19,
              "character": 34
            }
          ],
          "implementedTypes": [
            {
              "type": "reference",
              "name": "OnInit"
            }
          ]
        },
        {
          "id": 553,
          "name": "NgaMenuItem2Component",
          "kind": 128,
          "kindString": "Class",
          "flags": {
            "isExported": true
          },
          "decorators": [
            {
              "name": "Component",
              "type": {
                "type": "reference",
                "name": "Component"
              },
              "arguments": {
                "obj": "{\n  selector: 'nga-menu-item2',\n  template: `\n    <h1>Menu Item #2</h1>\n  `,\n}"
              }
            }
          ],
          "children": [
            {
              "id": 554,
              "name": "constructor",
              "kind": 512,
              "kindString": "Constructor",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 555,
                  "name": "new NgaMenuItem2Component",
                  "kind": 16384,
                  "kindString": "Constructor signature",
                  "flags": {},
                  "type": {
                    "type": "reference",
                    "name": "NgaMenuItem2Component",
                    "id": 553
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/app/menu-test/menu-test.component.ts",
                  "line": 32,
                  "character": 54
                }
              ]
            },
            {
              "id": 556,
              "name": "ngOnInit",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 557,
                  "name": "ngOnInit",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "type": {
                    "type": "instrinct",
                    "name": "void"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/app/menu-test/menu-test.component.ts",
                  "line": 35,
                  "character": 10
                }
              ]
            }
          ],
          "groups": [
            {
              "title": "Constructors",
              "kind": 512,
              "children": [
                554
              ]
            },
            {
              "title": "Methods",
              "kind": 2048,
              "children": [
                556
              ]
            }
          ],
          "sources": [
            {
              "fileName": "src/app/menu-test/menu-test.component.ts",
              "line": 32,
              "character": 34
            }
          ],
          "implementedTypes": [
            {
              "type": "reference",
              "name": "OnInit"
            }
          ]
        },
        {
          "id": 563,
          "name": "NgaMenuItem31Component",
          "kind": 128,
          "kindString": "Class",
          "flags": {
            "isExported": true
          },
          "decorators": [
            {
              "name": "Component",
              "type": {
                "type": "reference",
                "name": "Component"
              },
              "arguments": {
                "obj": "{\n  selector: 'nga-menu-item31',\n  template: `\n    <h1>Menu Item #3.1</h1>\n  `,\n}"
              }
            }
          ],
          "children": [
            {
              "id": 564,
              "name": "constructor",
              "kind": 512,
              "kindString": "Constructor",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 565,
                  "name": "new NgaMenuItem31Component",
                  "kind": 16384,
                  "kindString": "Constructor signature",
                  "flags": {},
                  "type": {
                    "type": "reference",
                    "name": "NgaMenuItem31Component",
                    "id": 563
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/app/menu-test/menu-test.component.ts",
                  "line": 56,
                  "character": 55
                }
              ]
            },
            {
              "id": 566,
              "name": "ngOnInit",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 567,
                  "name": "ngOnInit",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "type": {
                    "type": "instrinct",
                    "name": "void"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/app/menu-test/menu-test.component.ts",
                  "line": 59,
                  "character": 10
                }
              ]
            }
          ],
          "groups": [
            {
              "title": "Constructors",
              "kind": 512,
              "children": [
                564
              ]
            },
            {
              "title": "Methods",
              "kind": 2048,
              "children": [
                566
              ]
            }
          ],
          "sources": [
            {
              "fileName": "src/app/menu-test/menu-test.component.ts",
              "line": 56,
              "character": 35
            }
          ],
          "implementedTypes": [
            {
              "type": "reference",
              "name": "OnInit"
            }
          ]
        },
        {
          "id": 568,
          "name": "NgaMenuItem32Component",
          "kind": 128,
          "kindString": "Class",
          "flags": {
            "isExported": true
          },
          "decorators": [
            {
              "name": "Component",
              "type": {
                "type": "reference",
                "name": "Component"
              },
              "arguments": {
                "obj": "{\n  selector: 'nga-menu-item32',\n  template: `\n    <h1>Menu Item #3.2</h1>\n  `,\n}"
              }
            }
          ],
          "children": [
            {
              "id": 569,
              "name": "constructor",
              "kind": 512,
              "kindString": "Constructor",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 570,
                  "name": "new NgaMenuItem32Component",
                  "kind": 16384,
                  "kindString": "Constructor signature",
                  "flags": {},
                  "type": {
                    "type": "reference",
                    "name": "NgaMenuItem32Component",
                    "id": 568
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/app/menu-test/menu-test.component.ts",
                  "line": 68,
                  "character": 55
                }
              ]
            },
            {
              "id": 571,
              "name": "ngOnInit",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 572,
                  "name": "ngOnInit",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "type": {
                    "type": "instrinct",
                    "name": "void"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/app/menu-test/menu-test.component.ts",
                  "line": 71,
                  "character": 10
                }
              ]
            }
          ],
          "groups": [
            {
              "title": "Constructors",
              "kind": 512,
              "children": [
                569
              ]
            },
            {
              "title": "Methods",
              "kind": 2048,
              "children": [
                571
              ]
            }
          ],
          "sources": [
            {
              "fileName": "src/app/menu-test/menu-test.component.ts",
              "line": 68,
              "character": 35
            }
          ],
          "implementedTypes": [
            {
              "type": "reference",
              "name": "OnInit"
            }
          ]
        },
        {
          "id": 578,
          "name": "NgaMenuItem331Component",
          "kind": 128,
          "kindString": "Class",
          "flags": {
            "isExported": true
          },
          "decorators": [
            {
              "name": "Component",
              "type": {
                "type": "reference",
                "name": "Component"
              },
              "arguments": {
                "obj": "{\n  selector: 'nga-menu-item331',\n  template: `\n    <h1>Menu Item #3.3.1</h1>\n  `,\n}"
              }
            }
          ],
          "children": [
            {
              "id": 579,
              "name": "constructor",
              "kind": 512,
              "kindString": "Constructor",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 580,
                  "name": "new NgaMenuItem331Component",
                  "kind": 16384,
                  "kindString": "Constructor signature",
                  "flags": {},
                  "type": {
                    "type": "reference",
                    "name": "NgaMenuItem331Component",
                    "id": 578
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/app/menu-test/menu-test.component.ts",
                  "line": 92,
                  "character": 56
                }
              ]
            },
            {
              "id": 581,
              "name": "ngOnInit",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 582,
                  "name": "ngOnInit",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "type": {
                    "type": "instrinct",
                    "name": "void"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/app/menu-test/menu-test.component.ts",
                  "line": 95,
                  "character": 10
                }
              ]
            }
          ],
          "groups": [
            {
              "title": "Constructors",
              "kind": 512,
              "children": [
                579
              ]
            },
            {
              "title": "Methods",
              "kind": 2048,
              "children": [
                581
              ]
            }
          ],
          "sources": [
            {
              "fileName": "src/app/menu-test/menu-test.component.ts",
              "line": 92,
              "character": 36
            }
          ],
          "implementedTypes": [
            {
              "type": "reference",
              "name": "OnInit"
            }
          ]
        },
        {
          "id": 583,
          "name": "NgaMenuItem332Component",
          "kind": 128,
          "kindString": "Class",
          "flags": {
            "isExported": true
          },
          "decorators": [
            {
              "name": "Component",
              "type": {
                "type": "reference",
                "name": "Component"
              },
              "arguments": {
                "obj": "{\n  selector: 'nga-menu-item332',\n  template: `\n    <h1>Menu Item #3.3.2</h1>\n  `,\n}"
              }
            }
          ],
          "children": [
            {
              "id": 584,
              "name": "constructor",
              "kind": 512,
              "kindString": "Constructor",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 585,
                  "name": "new NgaMenuItem332Component",
                  "kind": 16384,
                  "kindString": "Constructor signature",
                  "flags": {},
                  "type": {
                    "type": "reference",
                    "name": "NgaMenuItem332Component",
                    "id": 583
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/app/menu-test/menu-test.component.ts",
                  "line": 104,
                  "character": 56
                }
              ]
            },
            {
              "id": 586,
              "name": "ngOnInit",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 587,
                  "name": "ngOnInit",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "type": {
                    "type": "instrinct",
                    "name": "void"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/app/menu-test/menu-test.component.ts",
                  "line": 107,
                  "character": 10
                }
              ]
            }
          ],
          "groups": [
            {
              "title": "Constructors",
              "kind": 512,
              "children": [
                584
              ]
            },
            {
              "title": "Methods",
              "kind": 2048,
              "children": [
                586
              ]
            }
          ],
          "sources": [
            {
              "fileName": "src/app/menu-test/menu-test.component.ts",
              "line": 104,
              "character": 36
            }
          ],
          "implementedTypes": [
            {
              "type": "reference",
              "name": "OnInit"
            }
          ]
        },
        {
          "id": 573,
          "name": "NgaMenuItem33Component",
          "kind": 128,
          "kindString": "Class",
          "flags": {
            "isExported": true
          },
          "decorators": [
            {
              "name": "Component",
              "type": {
                "type": "reference",
                "name": "Component"
              },
              "arguments": {
                "obj": "{\n  selector: 'nga-menu-item33',\n  template: `\n    <router-outlet></router-outlet>\n  `,\n}"
              }
            }
          ],
          "children": [
            {
              "id": 574,
              "name": "constructor",
              "kind": 512,
              "kindString": "Constructor",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 575,
                  "name": "new NgaMenuItem33Component",
                  "kind": 16384,
                  "kindString": "Constructor signature",
                  "flags": {},
                  "type": {
                    "type": "reference",
                    "name": "NgaMenuItem33Component",
                    "id": 573
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/app/menu-test/menu-test.component.ts",
                  "line": 80,
                  "character": 55
                }
              ]
            },
            {
              "id": 576,
              "name": "ngOnInit",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 577,
                  "name": "ngOnInit",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "type": {
                    "type": "instrinct",
                    "name": "void"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/app/menu-test/menu-test.component.ts",
                  "line": 83,
                  "character": 10
                }
              ]
            }
          ],
          "groups": [
            {
              "title": "Constructors",
              "kind": 512,
              "children": [
                574
              ]
            },
            {
              "title": "Methods",
              "kind": 2048,
              "children": [
                576
              ]
            }
          ],
          "sources": [
            {
              "fileName": "src/app/menu-test/menu-test.component.ts",
              "line": 80,
              "character": 35
            }
          ],
          "implementedTypes": [
            {
              "type": "reference",
              "name": "OnInit"
            }
          ]
        },
        {
          "id": 558,
          "name": "NgaMenuItem3Component",
          "kind": 128,
          "kindString": "Class",
          "flags": {
            "isExported": true
          },
          "decorators": [
            {
              "name": "Component",
              "type": {
                "type": "reference",
                "name": "Component"
              },
              "arguments": {
                "obj": "{\n  selector: 'nga-menu-item3',\n  template: `\n    <router-outlet></router-outlet>\n  `,\n}"
              }
            }
          ],
          "children": [
            {
              "id": 559,
              "name": "constructor",
              "kind": 512,
              "kindString": "Constructor",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 560,
                  "name": "new NgaMenuItem3Component",
                  "kind": 16384,
                  "kindString": "Constructor signature",
                  "flags": {},
                  "type": {
                    "type": "reference",
                    "name": "NgaMenuItem3Component",
                    "id": 558
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/app/menu-test/menu-test.component.ts",
                  "line": 44,
                  "character": 54
                }
              ]
            },
            {
              "id": 561,
              "name": "ngOnInit",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 562,
                  "name": "ngOnInit",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "type": {
                    "type": "instrinct",
                    "name": "void"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/app/menu-test/menu-test.component.ts",
                  "line": 47,
                  "character": 10
                }
              ]
            }
          ],
          "groups": [
            {
              "title": "Constructors",
              "kind": 512,
              "children": [
                559
              ]
            },
            {
              "title": "Methods",
              "kind": 2048,
              "children": [
                561
              ]
            }
          ],
          "sources": [
            {
              "fileName": "src/app/menu-test/menu-test.component.ts",
              "line": 44,
              "character": 34
            }
          ],
          "implementedTypes": [
            {
              "type": "reference",
              "name": "OnInit"
            }
          ]
        },
        {
          "id": 588,
          "name": "NgaMenuItem4Component",
          "kind": 128,
          "kindString": "Class",
          "flags": {
            "isExported": true
          },
          "decorators": [
            {
              "name": "Component",
              "type": {
                "type": "reference",
                "name": "Component"
              },
              "arguments": {
                "obj": "{\n  selector: 'nga-menu-item4',\n  template: `\n    <h1>Menu Item #4</h1>\n  `,\n}"
              }
            }
          ],
          "children": [
            {
              "id": 589,
              "name": "constructor",
              "kind": 512,
              "kindString": "Constructor",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 590,
                  "name": "new NgaMenuItem4Component",
                  "kind": 16384,
                  "kindString": "Constructor signature",
                  "flags": {},
                  "type": {
                    "type": "reference",
                    "name": "NgaMenuItem4Component",
                    "id": 588
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/app/menu-test/menu-test.component.ts",
                  "line": 116,
                  "character": 54
                }
              ]
            },
            {
              "id": 591,
              "name": "ngOnInit",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 592,
                  "name": "ngOnInit",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "type": {
                    "type": "instrinct",
                    "name": "void"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/app/menu-test/menu-test.component.ts",
                  "line": 119,
                  "character": 10
                }
              ]
            }
          ],
          "groups": [
            {
              "title": "Constructors",
              "kind": 512,
              "children": [
                589
              ]
            },
            {
              "title": "Methods",
              "kind": 2048,
              "children": [
                591
              ]
            }
          ],
          "sources": [
            {
              "fileName": "src/app/menu-test/menu-test.component.ts",
              "line": 116,
              "character": 34
            }
          ],
          "implementedTypes": [
            {
              "type": "reference",
              "name": "OnInit"
            }
          ]
        },
        {
          "id": 593,
          "name": "NgaMenuTestComponent",
          "kind": 128,
          "kindString": "Class",
          "flags": {
            "isExported": true
          },
          "decorators": [
            {
              "name": "Component",
              "type": {
                "type": "reference",
                "name": "Component"
              },
              "arguments": {
                "obj": "{\n  selector: 'nga-menu-test',\n  template: `\n    <nga-layout>\n      <nga-layout-column>\n        <nga-menu tag=\"firstMenu\"></nga-menu>\n        <router-outlet></router-outlet>\n        <button class=\"btn btn-primary\" id=\"addBtn\" (click)=\"addMenuItem()\">Add</button>\n        <button class=\"btn btn-primary\" id=\"homeBtn\" (click)=\"navigateHome()\">Home</button>\n      </nga-layout-column>\n    </nga-layout>\n  `,\n}"
              }
            }
          ],
          "children": [
            {
              "id": 595,
              "name": "constructor",
              "kind": 512,
              "kindString": "Constructor",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 597,
                  "name": "new NgaMenuTestComponent",
                  "kind": 16384,
                  "kindString": "Constructor signature",
                  "flags": {},
                  "parameters": [
                    {
                      "id": 598,
                      "name": "menuService",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {},
                      "type": {
                        "type": "reference",
                        "name": "NgaMenuService",
                        "id": 186
                      }
                    }
                  ],
                  "type": {
                    "type": "reference",
                    "name": "NgaMenuTestComponent",
                    "id": 593
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/app/menu-test/menu-test.component.ts",
                  "line": 196,
                  "character": 5
                }
              ]
            },
            {
              "id": 594,
              "name": "menuItems",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isPrivate": true,
                "isExported": true
              },
              "sources": [
                {
                  "fileName": "src/app/menu-test/menu-test.component.ts",
                  "line": 137,
                  "character": 19
                }
              ],
              "type": {
                "type": "reference",
                "name": "List",
                "typeArguments": [
                  {
                    "type": "reference",
                    "name": "NgaMenuItem",
                    "id": 58
                  }
                ]
              },
              "defaultValue": " List([\n    {\n      title: 'Menu Items',\n      group: true,\n      icon: 'ion ion-heart',\n    },\n    {\n      title: 'Menu #1',\n      link: '/menu/1',\n    },\n    {\n      title: 'Menu #2',\n      link: '/menu/2',\n      icon: 'ion ion-ionic',\n    },\n    {\n      title: 'Menu #3',\n      children: List([\n        {\n          title: 'Menu #3.1',\n          link: '/menu/3/1',\n          icon: 'ion ion-heart',\n        },\n        {\n          title: 'Menu #3.2',\n          link: '/menu/3/2',\n        },\n        {\n          title: 'Menu #3.3',\n          icon: 'ion ion-icecream',\n          children: List([\n            {\n              title: 'Menu #3.3.1',\n              link: '/menu/3/3/1',\n            },\n            {\n              title: 'Menu #3.3.2',\n              link: '/menu/3/3/2',\n              icon: 'ion ion-happy-outline',\n              home: true,\n            },\n            {\n              title: '@nga/theme',\n              target: '_blank',\n              url: 'https://github.com/akveo/ng2-admin',\n            },\n          ]),\n        },\n      ]),\n    },\n    {\n      title: 'Menu #4',\n      link: '/menu/4',\n      icon: 'ion ion-ionic',\n    },\n    {\n      title: 'Menu #5',\n      icon: 'ion ion-ionic',\n    },\n  ])"
            },
            {
              "id": 596,
              "name": "menuService",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isPrivate": true,
                "isConstructorProperty": true,
                "isExported": true
              },
              "sources": [
                {
                  "fileName": "src/app/menu-test/menu-test.component.ts",
                  "line": 198,
                  "character": 33
                }
              ],
              "type": {
                "type": "reference",
                "name": "NgaMenuService",
                "id": 186
              }
            },
            {
              "id": 603,
              "name": "addMenuItem",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 604,
                  "name": "addMenuItem",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "type": {
                    "type": "instrinct",
                    "name": "void"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/app/menu-test/menu-test.component.ts",
                  "line": 213,
                  "character": 13
                }
              ]
            },
            {
              "id": 605,
              "name": "navigateHome",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 606,
                  "name": "navigateHome",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "type": {
                    "type": "instrinct",
                    "name": "void"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/app/menu-test/menu-test.component.ts",
                  "line": 217,
                  "character": 14
                }
              ]
            },
            {
              "id": 601,
              "name": "ngAfterViewInit",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 602,
                  "name": "ngAfterViewInit",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "type": {
                    "type": "instrinct",
                    "name": "void"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/app/menu-test/menu-test.component.ts",
                  "line": 209,
                  "character": 17
                }
              ]
            },
            {
              "id": 599,
              "name": "ngOnInit",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 600,
                  "name": "ngOnInit",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "type": {
                    "type": "instrinct",
                    "name": "void"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/app/menu-test/menu-test.component.ts",
                  "line": 200,
                  "character": 10
                }
              ]
            }
          ],
          "groups": [
            {
              "title": "Constructors",
              "kind": 512,
              "children": [
                595
              ]
            },
            {
              "title": "Properties",
              "kind": 1024,
              "children": [
                594,
                596
              ]
            },
            {
              "title": "Methods",
              "kind": 2048,
              "children": [
                603,
                605,
                601,
                599
              ]
            }
          ],
          "sources": [
            {
              "fileName": "src/app/menu-test/menu-test.component.ts",
              "line": 135,
              "character": 33
            }
          ],
          "implementedTypes": [
            {
              "type": "reference",
              "name": "OnInit"
            },
            {
              "type": "reference",
              "name": "AfterViewInit"
            }
          ]
        }
      ],
      "groups": [
        {
          "title": "Classes",
          "kind": 128,
          "children": [
            548,
            553,
            563,
            568,
            578,
            583,
            573,
            558,
            588,
            593
          ]
        }
      ],
      "sources": [
        {
          "fileName": "src/app/menu-test/menu-test.component.ts",
          "line": 1,
          "character": 0
        }
      ]
    },
    {
      "id": 523,
      "name": "\"src/app/route-tabset-test/route-tabset-test.component\"",
      "kind": 1,
      "kindString": "External module",
      "flags": {
        "isExported": true
      },
      "originalName": "/Users/nixa/Development/Projects/Akveo/ng2-admin/src/app/route-tabset-test/route-tabset-test.component.ts",
      "children": [
        {
          "id": 524,
          "name": "NgaRouteTabsetTestChild1Component",
          "kind": 128,
          "kindString": "Class",
          "flags": {
            "isExported": true
          },
          "decorators": [
            {
              "name": "Component",
              "type": {
                "type": "reference",
                "name": "Component"
              },
              "arguments": {
                "obj": "{\n  selector: 'nga-route-tabset-test-child1',\n  template: `<h1>Child 1</h1>`,\n}"
              }
            }
          ],
          "sources": [
            {
              "fileName": "src/app/route-tabset-test/route-tabset-test.component.ts",
              "line": 12,
              "character": 46
            }
          ]
        },
        {
          "id": 525,
          "name": "NgaRouteTabsetTestChild2Component",
          "kind": 128,
          "kindString": "Class",
          "flags": {
            "isExported": true
          },
          "decorators": [
            {
              "name": "Component",
              "type": {
                "type": "reference",
                "name": "Component"
              },
              "arguments": {
                "obj": "{\n  selector: 'nga-route-tabset-test-child2',\n  template: `<h1>Child 2</h1>`,\n}"
              }
            }
          ],
          "sources": [
            {
              "fileName": "src/app/route-tabset-test/route-tabset-test.component.ts",
              "line": 19,
              "character": 46
            }
          ]
        },
        {
          "id": 526,
          "name": "NgaRouteTabsetTestComponent",
          "kind": 128,
          "kindString": "Class",
          "flags": {
            "isExported": true
          },
          "decorators": [
            {
              "name": "Component",
              "type": {
                "type": "reference",
                "name": "Component"
              },
              "arguments": {
                "obj": "{\n  selector: 'nga-route-tabset-test',\n  template: `\n    <nga-layout>\n      <nga-layout-column>\n        <nga-route-tabset [tabs]=\"tabs\"></nga-route-tabset>\n        <nga-route-tabset [tabs]=\"tabs\" fullWidth></nga-route-tabset>\n      </nga-layout-column>\n    </nga-layout>\n  `,\n}"
              }
            }
          ],
          "children": [
            {
              "id": 527,
              "name": "tabs",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isExported": true
              },
              "sources": [
                {
                  "fileName": "src/app/route-tabset-test/route-tabset-test.component.ts",
                  "line": 34,
                  "character": 6
                }
              ],
              "type": {
                "type": "instrinct",
                "isArray": true,
                "name": "any"
              },
              "defaultValue": " [\n    {\n      title: 'Tab #1',\n      route: '/route-tabset/tab1',\n    },\n    {\n      title: 'Tab #2',\n      route: '/route-tabset/tab2',\n    },\n  ]"
            }
          ],
          "groups": [
            {
              "title": "Properties",
              "kind": 1024,
              "children": [
                527
              ]
            }
          ],
          "sources": [
            {
              "fileName": "src/app/route-tabset-test/route-tabset-test.component.ts",
              "line": 33,
              "character": 40
            }
          ]
        }
      ],
      "groups": [
        {
          "title": "Classes",
          "kind": 128,
          "children": [
            524,
            525,
            526
          ]
        }
      ],
      "sources": [
        {
          "fileName": "src/app/route-tabset-test/route-tabset-test.component.ts",
          "line": 1,
          "character": 0
        }
      ]
    },
    {
      "id": 541,
      "name": "\"src/app/sidebar-test/sidebar-test-one.component\"",
      "kind": 1,
      "kindString": "External module",
      "flags": {
        "isExported": true
      },
      "originalName": "/Users/nixa/Development/Projects/Akveo/ng2-admin/src/app/sidebar-test/sidebar-test-one.component.ts",
      "children": [
        {
          "id": 542,
          "name": "NgaSidebarTestOneComponent",
          "kind": 128,
          "kindString": "Class",
          "flags": {
            "isExported": true
          },
          "decorators": [
            {
              "name": "Component",
              "type": {
                "type": "reference",
                "name": "Component"
              },
              "arguments": {
                "obj": "{\n  selector: 'nga-sidebar-test-one',\n  styles: [\n    `\n    :host /deep/ nga-layout-column {\n      background-color: #76ecff;\n    }\n    `,\n  ],\n  template: `\n    <nga-layout>\n      <nga-sidebar>\n        Left\n      </nga-sidebar>\n\n      <nga-sidebar right>\n        Right\n      </nga-sidebar>\n    </nga-layout>\n`,\n}"
              }
            }
          ],
          "sources": [
            {
              "fileName": "src/app/sidebar-test/sidebar-test-one.component.ts",
              "line": 30,
              "character": 39
            }
          ]
        }
      ],
      "groups": [
        {
          "title": "Classes",
          "kind": 128,
          "children": [
            542
          ]
        }
      ],
      "sources": [
        {
          "fileName": "src/app/sidebar-test/sidebar-test-one.component.ts",
          "line": 1,
          "character": 0
        }
      ]
    },
    {
      "id": 545,
      "name": "\"src/app/sidebar-test/sidebar-test-three.component\"",
      "kind": 1,
      "kindString": "External module",
      "flags": {
        "isExported": true
      },
      "originalName": "/Users/nixa/Development/Projects/Akveo/ng2-admin/src/app/sidebar-test/sidebar-test-three.component.ts",
      "children": [
        {
          "id": 546,
          "name": "NgaSidebarTestThreeComponent",
          "kind": 128,
          "kindString": "Class",
          "flags": {
            "isExported": true
          },
          "decorators": [
            {
              "name": "Component",
              "type": {
                "type": "reference",
                "name": "Component"
              },
              "arguments": {
                "obj": "{\n  selector: 'nga-sidebar-test-three',\n  styles: [\n    `\n    :host /deep/ nga-layout-column {\n      background-color: #76ecff;\n    }\n    `,\n  ],\n  template: `\n    <nga-layout>\n\n      <nga-layout-header></nga-layout-header>\n\n      <nga-sidebar state=\"collapsed\">\n        Left\n      </nga-sidebar>\n\n      <nga-sidebar state=\"compacted\" fixed right>\n        Right\n      </nga-sidebar>\n\n      <nga-layout-footer></nga-layout-footer>\n\n    </nga-layout>\n`,\n}"
              }
            }
          ],
          "sources": [
            {
              "fileName": "src/app/sidebar-test/sidebar-test-three.component.ts",
              "line": 36,
              "character": 41
            }
          ]
        }
      ],
      "groups": [
        {
          "title": "Classes",
          "kind": 128,
          "children": [
            546
          ]
        }
      ],
      "sources": [
        {
          "fileName": "src/app/sidebar-test/sidebar-test-three.component.ts",
          "line": 1,
          "character": 0
        }
      ]
    },
    {
      "id": 543,
      "name": "\"src/app/sidebar-test/sidebar-test-two.component\"",
      "kind": 1,
      "kindString": "External module",
      "flags": {
        "isExported": true
      },
      "originalName": "/Users/nixa/Development/Projects/Akveo/ng2-admin/src/app/sidebar-test/sidebar-test-two.component.ts",
      "children": [
        {
          "id": 544,
          "name": "NgaSidebarTestTwoComponent",
          "kind": 128,
          "kindString": "Class",
          "flags": {
            "isExported": true
          },
          "decorators": [
            {
              "name": "Component",
              "type": {
                "type": "reference",
                "name": "Component"
              },
              "arguments": {
                "obj": "{\n  selector: 'nga-sidebar-test-one',\n  styles: [\n    `\n    :host /deep/ nga-layout-column {\n      background-color: #76ecff;\n    }\n    `,\n  ],\n  template: `\n    <nga-layout>\n\n      <nga-layout-header></nga-layout-header>\n\n      <nga-sidebar>\n        Left\n      </nga-sidebar>\n\n      <nga-sidebar right fixed>\n        Right\n      </nga-sidebar>\n\n      <nga-layout-footer></nga-layout-footer>\n\n    </nga-layout>\n`,\n}"
              }
            }
          ],
          "sources": [
            {
              "fileName": "src/app/sidebar-test/sidebar-test-two.component.ts",
              "line": 36,
              "character": 39
            }
          ]
        }
      ],
      "groups": [
        {
          "title": "Classes",
          "kind": 128,
          "children": [
            544
          ]
        }
      ],
      "sources": [
        {
          "fileName": "src/app/sidebar-test/sidebar-test-two.component.ts",
          "line": 1,
          "character": 0
        }
      ]
    },
    {
      "id": 528,
      "name": "\"src/app/sidebar-test/sidebar-test.component\"",
      "kind": 1,
      "kindString": "External module",
      "flags": {
        "isExported": true
      },
      "originalName": "/Users/nixa/Development/Projects/Akveo/ng2-admin/src/app/sidebar-test/sidebar-test.component.ts",
      "children": [
        {
          "id": 529,
          "name": "NgaSidebarTestComponent",
          "kind": 128,
          "kindString": "Class",
          "flags": {
            "isExported": true
          },
          "decorators": [
            {
              "name": "Component",
              "type": {
                "type": "reference",
                "name": "Component"
              },
              "arguments": {
                "obj": "{\n  selector: 'nga-sidebar-test',\n  styles: [\n    `\n    :host /deep/ nga-layout-column {\n      background-color: #76ecff;\n    }\n    `,\n  ],\n  template: `\n    <nga-layout>\n      <nga-layout-header fixed>\n        <a href=\"#\" class=\"navbar-brand\">Akveo</a>\n\n        <button id=\"collapse-left\" (click)=\"collapseLeft()\">Collapse Left</button>\n        <button id=\"collapse-right\" (click)=\"collapseRight()\">Collapse Right</button>\n      </nga-layout-header>\n\n      <nga-sidebar state=\"collapsed\" fixed tag=\"left\">\n      </nga-sidebar>\n\n      <nga-sidebar right state=\"compacted\" tag=\"right\">\n        {{ content }}\n      </nga-sidebar>\n\n      <nga-layout-column left>\n       {{ content }}\n      </nga-layout-column>\n      <nga-layout-column>\n       {{ content }}\n      </nga-layout-column>\n      <nga-layout-column>\n       {{ content }}\n      </nga-layout-column>\n\n\n      <nga-layout-footer fixed>\n        &copy; Akveo 2017\n      </nga-layout-footer>\n    </nga-layout>\n`,\n}"
              }
            }
          ],
          "children": [
            {
              "id": 531,
              "name": "constructor",
              "kind": 512,
              "kindString": "Constructor",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 533,
                  "name": "new NgaSidebarTestComponent",
                  "kind": 16384,
                  "kindString": "Constructor signature",
                  "flags": {},
                  "parameters": [
                    {
                      "id": 534,
                      "name": "sidebarService",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {},
                      "type": {
                        "type": "reference",
                        "name": "NgaSidebarService",
                        "id": 325
                      }
                    }
                  ],
                  "type": {
                    "type": "reference",
                    "name": "NgaSidebarTestComponent",
                    "id": 529
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/app/sidebar-test/sidebar-test.component.ts",
                  "line": 54,
                  "character": 21
                }
              ]
            },
            {
              "id": 530,
              "name": "content",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isExported": true
              },
              "sources": [
                {
                  "fileName": "src/app/sidebar-test/sidebar-test.component.ts",
                  "line": 54,
                  "character": 9
                }
              ],
              "type": {
                "type": "instrinct",
                "name": "string"
              },
              "defaultValue": "\"First \""
            },
            {
              "id": 532,
              "name": "sidebarService",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isPrivate": true,
                "isConstructorProperty": true,
                "isExported": true
              },
              "sources": [
                {
                  "fileName": "src/app/sidebar-test/sidebar-test.component.ts",
                  "line": 56,
                  "character": 36
                }
              ],
              "type": {
                "type": "reference",
                "name": "NgaSidebarService",
                "id": 325
              }
            },
            {
              "id": 535,
              "name": "collapseLeft",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 536,
                  "name": "collapseLeft",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "type": {
                    "type": "instrinct",
                    "name": "void"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/app/sidebar-test/sidebar-test.component.ts",
                  "line": 58,
                  "character": 14
                }
              ]
            },
            {
              "id": 537,
              "name": "collapseRight",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 538,
                  "name": "collapseRight",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "type": {
                    "type": "instrinct",
                    "name": "void"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/app/sidebar-test/sidebar-test.component.ts",
                  "line": 62,
                  "character": 15
                }
              ]
            },
            {
              "id": 539,
              "name": "ngOnInit",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 540,
                  "name": "ngOnInit",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "type": {
                    "type": "instrinct",
                    "name": "void"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/app/sidebar-test/sidebar-test.component.ts",
                  "line": 66,
                  "character": 10
                }
              ]
            }
          ],
          "groups": [
            {
              "title": "Constructors",
              "kind": 512,
              "children": [
                531
              ]
            },
            {
              "title": "Properties",
              "kind": 1024,
              "children": [
                530,
                532
              ]
            },
            {
              "title": "Methods",
              "kind": 2048,
              "children": [
                535,
                537,
                539
              ]
            }
          ],
          "sources": [
            {
              "fileName": "src/app/sidebar-test/sidebar-test.component.ts",
              "line": 52,
              "character": 36
            }
          ],
          "implementedTypes": [
            {
              "type": "reference",
              "name": "OnInit"
            }
          ]
        }
      ],
      "groups": [
        {
          "title": "Classes",
          "kind": 128,
          "children": [
            529
          ]
        }
      ],
      "sources": [
        {
          "fileName": "src/app/sidebar-test/sidebar-test.component.ts",
          "line": 1,
          "character": 0
        }
      ]
    },
    {
      "id": 514,
      "name": "\"src/app/tabset-test/tabset-test.component\"",
      "kind": 1,
      "kindString": "External module",
      "flags": {
        "isExported": true
      },
      "originalName": "/Users/nixa/Development/Projects/Akveo/ng2-admin/src/app/tabset-test/tabset-test.component.ts",
      "children": [
        {
          "id": 515,
          "name": "NgaTabsetTestComponent",
          "kind": 128,
          "kindString": "Class",
          "flags": {
            "isExported": true
          },
          "decorators": [
            {
              "name": "Component",
              "type": {
                "type": "reference",
                "name": "Component"
              },
              "arguments": {
                "obj": "{\n  selector: 'nga-tabset-test',\n  template: `\n    <nga-layout>\n      <nga-layout-column>\n        <nga-tabset>\n          <nga-tab tabTitle=\"Tab #1\">\n            <span>Content #1</span>\n          </nga-tab>\n          <nga-tab tabTitle=\"Tab #2\">\n            <span>Content #2</span>\n          </nga-tab>\n          <nga-tab tabTitle=\"Tab #3\">\n            <span>Content #3</span>\n          </nga-tab>\n        </nga-tabset>\n        <nga-tabset>\n          <nga-tab tabTitle=\"Tab #1\">\n            <span>Content #1</span>\n          </nga-tab>\n          <nga-tab tabTitle=\"Tab #2\" [active]=\"true\">\n            <span>Content #2</span>\n          </nga-tab>\n          <nga-tab tabTitle=\"Tab #3\">\n            <span>Content #3</span>\n          </nga-tab>\n        </nga-tabset>\n        <nga-tabset>\n          <nga-tab tabTitle=\"Tab #1\">\n            <span>Content #1</span>\n          </nga-tab>\n          <nga-tab tabTitle=\"Tab #2\">\n            <span>Content #2</span>\n          </nga-tab>\n          <nga-tab tabTitle=\"Tab #3\" [active]=\"true\">\n            <span>Content #3</span>\n          </nga-tab>\n        </nga-tabset>\n        <nga-tabset (changeTab)=\"changeTab($event)\" [routes]=\"true\">\n          <nga-tab tabTitle=\"Tab #1\" route=\"tab1\">\n            <span>Content #1</span>\n          </nga-tab>\n          <nga-tab tabTitle=\"Tab #2\" route=\"tab2\">\n            <span>Content #2</span>\n          </nga-tab>\n          <nga-tab tabTitle=\"Tab #3\" route=\"tab3\">\n            <span>Content #3</span>\n          </nga-tab>\n        </nga-tabset>\n        <nga-tabset fullWidth>\n          <nga-tab tabTitle=\"Tab #1\">\n            <span>Content #1</span>\n          </nga-tab>\n          <nga-tab tabTitle=\"Tab #2\">\n            <span>Content #2</span>\n          </nga-tab>\n          <nga-tab tabTitle=\"Tab #3\">\n            <span>Content #3</span>\n          </nga-tab>\n        </nga-tabset>\n      </nga-layout-column>\n    </nga-layout>\n  `,\n}"
              }
            }
          ],
          "children": [
            {
              "id": 516,
              "name": "constructor",
              "kind": 512,
              "kindString": "Constructor",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 518,
                  "name": "new NgaTabsetTestComponent",
                  "kind": 16384,
                  "kindString": "Constructor signature",
                  "flags": {},
                  "parameters": [
                    {
                      "id": 519,
                      "name": "router",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {},
                      "type": {
                        "type": "reference",
                        "name": "Router"
                      }
                    }
                  ],
                  "type": {
                    "type": "reference",
                    "name": "NgaTabsetTestComponent",
                    "id": 515
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/app/tabset-test/tabset-test.component.ts",
                  "line": 73,
                  "character": 37
                }
              ]
            },
            {
              "id": 517,
              "name": "router",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isPrivate": true,
                "isConstructorProperty": true,
                "isExported": true
              },
              "sources": [
                {
                  "fileName": "src/app/tabset-test/tabset-test.component.ts",
                  "line": 74,
                  "character": 28
                }
              ],
              "type": {
                "type": "reference",
                "name": "Router"
              }
            },
            {
              "id": 520,
              "name": "changeTab",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 521,
                  "name": "changeTab",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "parameters": [
                    {
                      "id": 522,
                      "name": "$event",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {},
                      "type": {
                        "type": "instrinct",
                        "name": "any"
                      }
                    }
                  ],
                  "type": {
                    "type": "instrinct",
                    "name": "void"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/app/tabset-test/tabset-test.component.ts",
                  "line": 77,
                  "character": 11
                }
              ]
            }
          ],
          "groups": [
            {
              "title": "Constructors",
              "kind": 512,
              "children": [
                516
              ]
            },
            {
              "title": "Properties",
              "kind": 1024,
              "children": [
                517
              ]
            },
            {
              "title": "Methods",
              "kind": 2048,
              "children": [
                520
              ]
            }
          ],
          "sources": [
            {
              "fileName": "src/app/tabset-test/tabset-test.component.ts",
              "line": 73,
              "character": 35
            }
          ]
        }
      ],
      "groups": [
        {
          "title": "Classes",
          "kind": 128,
          "children": [
            515
          ]
        }
      ],
      "sources": [
        {
          "fileName": "src/app/tabset-test/tabset-test.component.ts",
          "line": 1,
          "character": 0
        }
      ]
    },
    {
      "id": 607,
      "name": "\"src/app/user-test/user-test.component\"",
      "kind": 1,
      "kindString": "External module",
      "flags": {
        "isExported": true
      },
      "originalName": "/Users/nixa/Development/Projects/Akveo/ng2-admin/src/app/user-test/user-test.component.ts",
      "children": [
        {
          "id": 608,
          "name": "NgaUserTestComponent",
          "kind": 128,
          "kindString": "Class",
          "flags": {
            "isExported": true
          },
          "decorators": [
            {
              "name": "Component",
              "type": {
                "type": "reference",
                "name": "Component"
              },
              "arguments": {
                "obj": "{\n  selector: 'nga-user-test',\n  styles: [\n    `\n      .test-row {\n        margin: 20px;\n      }\n    `,\n  ],\n  template: `\n    <nga-layout id=\"layout-fluid\">\n      <nga-layout-header fixed>\n        <nga-user showInitials size=\"medium\" name=\"Dmitry Nehaychik\" title=\"Worker\"\n                  [menu]=\"contextMenu\" (menuClick)=\"onMenuItemClick($event)\"></nga-user>\n      </nga-layout-header>\n\n\n      <nga-layout-column>\n        <div class=\"test-row\">\n          <nga-user></nga-user>\n        </div>\n        <div class=\"test-row\">\n          <nga-user showInitials></nga-user>\n        </div>\n        <div class=\"test-row\">\n          <nga-user size=\"large\" name=\"Dmitry Nehaychik\"></nga-user>\n        </div>\n        <div class=\"test-row\">\n          <nga-user name=\"Dmitry Nehaychik\" title=\"Worker\"></nga-user>\n        </div>\n        <div class=\"test-row\">\n          <nga-user size=\"small\" name=\"Dmitry Nehaychik\" title=\"Worker\" showTitle=\"false\"></nga-user>\n        </div>\n        <div class=\"test-row\">\n          <nga-user onlyPicture size=\"medium\" name=\"Dmitry Nehaychik\" title=\"Worker\"></nga-user>\n        </div>\n        <div class=\"test-row\">\n          <nga-user size=\"medium\" name=\"Dmitry Nehaychik\" title=\"Worker\"\n                    [menu]=\"contextMenu\" (menuClick)=\"onMenuItemClick($event)\"></nga-user>\n        </div>\n        <div class=\"test-row\">\n          <nga-user onlyPicture size=\"medium\" name=\"Dmitry Nehaychik\" title=\"Worker\"\n                    [menu]=\"contextMenu\" (menuClick)=\"onMenuItemClick($event)\"></nga-user>\n        </div>\n        <div class=\"test-row\">\n          <nga-user size=\"large\" picture=\"http://lorempixel.com/400/200/animals/\"\n                    name=\"Dmitry Nehaychik\" title=\"Worker\"\n                    [menu]=\"contextMenu\" (menuClick)=\"onMenuItemClick($event)\"></nga-user>\n        </div>\n        <div class=\"test-row\">\n          <nga-user showInitials size=\"medium\" name=\"Dmitry Nehaychik\" title=\"Worker\"\n                    [menu]=\"contextMenu\" (menuClick)=\"onMenuItemClick($event)\"></nga-user>\n        </div>\n      </nga-layout-column>\n    </nga-layout>\n  `,\n}"
              }
            }
          ],
          "children": [
            {
              "id": 609,
              "name": "contextMenu",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isExported": true
              },
              "sources": [
                {
                  "fileName": "src/app/user-test/user-test.component.ts",
                  "line": 67,
                  "character": 13
                }
              ],
              "type": {
                "type": "reference",
                "name": "Array",
                "typeArguments": [
                  {
                    "type": "union",
                    "types": [
                      {
                        "type": "reflection",
                        "declaration": {
                          "id": 610,
                          "name": "__type",
                          "kind": 65536,
                          "kindString": "Type literal",
                          "flags": {},
                          "children": [
                            {
                              "id": 612,
                              "name": "link",
                              "kind": 32,
                              "kindString": "Variable",
                              "flags": {},
                              "sources": [
                                {
                                  "fileName": "src/app/user-test/user-test.component.ts",
                                  "line": 68,
                                  "character": 28
                                }
                              ],
                              "type": {
                                "type": "instrinct",
                                "name": "string"
                              },
                              "defaultValue": "\"some/link\""
                            },
                            {
                              "id": 611,
                              "name": "title",
                              "kind": 32,
                              "kindString": "Variable",
                              "flags": {},
                              "sources": [
                                {
                                  "fileName": "src/app/user-test/user-test.component.ts",
                                  "line": 68,
                                  "character": 11
                                }
                              ],
                              "type": {
                                "type": "instrinct",
                                "name": "string"
                              },
                              "defaultValue": "\"Profile\""
                            }
                          ],
                          "groups": [
                            {
                              "title": "Variables",
                              "kind": 32,
                              "children": [
                                612,
                                611
                              ]
                            }
                          ]
                        }
                      },
                      {
                        "type": "reflection",
                        "declaration": {
                          "id": 613,
                          "name": "__type",
                          "kind": 65536,
                          "kindString": "Type literal",
                          "flags": {},
                          "children": [
                            {
                              "id": 615,
                              "name": "target",
                              "kind": 32,
                              "kindString": "Variable",
                              "flags": {},
                              "sources": [
                                {
                                  "fileName": "src/app/user-test/user-test.component.ts",
                                  "line": 69,
                                  "character": 30
                                }
                              ],
                              "type": {
                                "type": "instrinct",
                                "name": "string"
                              },
                              "defaultValue": "\"_blank\""
                            },
                            {
                              "id": 614,
                              "name": "title",
                              "kind": 32,
                              "kindString": "Variable",
                              "flags": {},
                              "sources": [
                                {
                                  "fileName": "src/app/user-test/user-test.component.ts",
                                  "line": 69,
                                  "character": 11
                                }
                              ],
                              "type": {
                                "type": "instrinct",
                                "name": "string"
                              },
                              "defaultValue": "\"Billing\""
                            },
                            {
                              "id": 616,
                              "name": "url",
                              "kind": 32,
                              "kindString": "Variable",
                              "flags": {},
                              "sources": [
                                {
                                  "fileName": "src/app/user-test/user-test.component.ts",
                                  "line": 69,
                                  "character": 45
                                }
                              ],
                              "type": {
                                "type": "instrinct",
                                "name": "string"
                              },
                              "defaultValue": "\"http://akveo.com\""
                            }
                          ],
                          "groups": [
                            {
                              "title": "Variables",
                              "kind": 32,
                              "children": [
                                615,
                                614,
                                616
                              ]
                            }
                          ]
                        }
                      },
                      {
                        "type": "reflection",
                        "declaration": {
                          "id": 617,
                          "name": "__type",
                          "kind": 65536,
                          "kindString": "Type literal",
                          "flags": {},
                          "children": [
                            {
                              "id": 619,
                              "name": "key",
                              "kind": 32,
                              "kindString": "Variable",
                              "flags": {},
                              "sources": [
                                {
                                  "fileName": "src/app/user-test/user-test.component.ts",
                                  "line": 70,
                                  "character": 24
                                }
                              ],
                              "type": {
                                "type": "instrinct",
                                "name": "string"
                              },
                              "defaultValue": "\"exit\""
                            },
                            {
                              "id": 618,
                              "name": "title",
                              "kind": 32,
                              "kindString": "Variable",
                              "flags": {},
                              "sources": [
                                {
                                  "fileName": "src/app/user-test/user-test.component.ts",
                                  "line": 70,
                                  "character": 11
                                }
                              ],
                              "type": {
                                "type": "instrinct",
                                "name": "string"
                              },
                              "defaultValue": "\"Exit\""
                            }
                          ],
                          "groups": [
                            {
                              "title": "Variables",
                              "kind": 32,
                              "children": [
                                619,
                                618
                              ]
                            }
                          ]
                        }
                      }
                    ]
                  }
                ]
              },
              "defaultValue": " [\n    { title: 'Profile', link: 'some/link' },\n    { title: 'Billing', target: '_blank', url: 'http://akveo.com' },\n    { title: 'Exit', key: 'exit' },\n  ]"
            },
            {
              "id": 620,
              "name": "onMenuItemClick",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 621,
                  "name": "onMenuItemClick",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "parameters": [
                    {
                      "id": 622,
                      "name": "event",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {},
                      "type": {
                        "type": "instrinct",
                        "name": "any"
                      }
                    }
                  ],
                  "type": {
                    "type": "instrinct",
                    "name": "void"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/app/user-test/user-test.component.ts",
                  "line": 73,
                  "character": 17
                }
              ]
            }
          ],
          "groups": [
            {
              "title": "Properties",
              "kind": 1024,
              "children": [
                609
              ]
            },
            {
              "title": "Methods",
              "kind": 2048,
              "children": [
                620
              ]
            }
          ],
          "sources": [
            {
              "fileName": "src/app/user-test/user-test.component.ts",
              "line": 65,
              "character": 33
            }
          ]
        }
      ],
      "groups": [
        {
          "title": "Classes",
          "kind": 128,
          "children": [
            608
          ]
        }
      ],
      "sources": [
        {
          "fileName": "src/app/user-test/user-test.component.ts",
          "line": 1,
          "character": 0
        }
      ]
    },
    {
      "id": 1180,
      "name": "\"src/environments/environment\"",
      "kind": 1,
      "kindString": "External module",
      "flags": {
        "isExported": true
      },
      "originalName": "/Users/nixa/Development/Projects/Akveo/ng2-admin/src/environments/environment.ts",
      "children": [
        {
          "id": 1181,
          "name": "environment",
          "kind": 2097152,
          "kindString": "Object literal",
          "flags": {
            "isExported": true
          },
          "comment": {
            "tags": [
              {
                "tag": "license",
                "text": "\nCopyright Akveo. All Rights Reserved.\nLicensed under the MIT License. See License.txt in the project root for license information.\n"
              }
            ]
          },
          "children": [
            {
              "id": 1182,
              "name": "production",
              "kind": 32,
              "kindString": "Variable",
              "flags": {
                "isExported": true
              },
              "sources": [
                {
                  "fileName": "src/environments/environment.ts",
                  "line": 12,
                  "character": 12
                }
              ],
              "type": {
                "type": "instrinct",
                "name": "boolean"
              },
              "defaultValue": "false"
            }
          ],
          "groups": [
            {
              "title": "Variables",
              "kind": 32,
              "children": [
                1182
              ]
            }
          ],
          "sources": [
            {
              "fileName": "src/environments/environment.ts",
              "line": 11,
              "character": 24
            }
          ],
          "type": {
            "type": "instrinct",
            "name": "object"
          }
        }
      ],
      "groups": [
        {
          "title": "Object literals",
          "kind": 2097152,
          "children": [
            1181
          ]
        }
      ],
      "sources": [
        {
          "fileName": "src/environments/environment.ts",
          "line": 1,
          "character": 0
        }
      ]
    },
    {
      "id": 1189,
      "name": "\"src/environments/environment.prod\"",
      "kind": 1,
      "kindString": "External module",
      "flags": {
        "isExported": true
      },
      "originalName": "/Users/nixa/Development/Projects/Akveo/ng2-admin/src/environments/environment.prod.ts",
      "children": [
        {
          "id": 1190,
          "name": "environment",
          "kind": 2097152,
          "kindString": "Object literal",
          "flags": {
            "isExported": true
          },
          "comment": {
            "tags": [
              {
                "tag": "license",
                "text": "\nCopyright Akveo. All Rights Reserved.\nLicensed under the MIT License. See License.txt in the project root for license information.\n"
              }
            ]
          },
          "children": [
            {
              "id": 1191,
              "name": "production",
              "kind": 32,
              "kindString": "Variable",
              "flags": {
                "isExported": true
              },
              "sources": [
                {
                  "fileName": "src/environments/environment.prod.ts",
                  "line": 7,
                  "character": 12
                }
              ],
              "type": {
                "type": "instrinct",
                "name": "boolean"
              },
              "defaultValue": "true"
            }
          ],
          "groups": [
            {
              "title": "Variables",
              "kind": 32,
              "children": [
                1191
              ]
            }
          ],
          "sources": [
            {
              "fileName": "src/environments/environment.prod.ts",
              "line": 6,
              "character": 24
            }
          ],
          "type": {
            "type": "instrinct",
            "name": "object"
          }
        }
      ],
      "groups": [
        {
          "title": "Object literals",
          "kind": 2097152,
          "children": [
            1190
          ]
        }
      ],
      "sources": [
        {
          "fileName": "src/environments/environment.prod.ts",
          "line": 1,
          "character": 0
        }
      ]
    },
    {
      "id": 1161,
      "name": "\"src/framework/auth/auth.module\"",
      "kind": 1,
      "kindString": "External module",
      "flags": {
        "isExported": true
      },
      "originalName": "/Users/nixa/Development/Projects/Akveo/ng2-admin/src/framework/auth/auth.module.ts",
      "children": [
        {
          "id": 1162,
          "name": "NgaAuthModule",
          "kind": 128,
          "kindString": "Class",
          "flags": {
            "isExported": true
          },
          "decorators": [
            {
              "name": "NgModule",
              "type": {
                "type": "reference",
                "name": "NgModule"
              },
              "arguments": {
                "obj": "{\n  imports: [\n    CommonModule,\n    NgaLayoutModule,\n    RouterModule.forChild(routes),\n    FormsModule,\n    HttpModule,\n  ],\n  declarations: [\n    NgaAuthComponent,\n    NgaAuthBlockComponent,\n    NgaLoginComponent,\n    NgaRegisterComponent,\n    NgaRequestPasswordComponent,\n    NgaResetPasswordComponent,\n    NgaLogoutComponent,\n  ],\n  exports: [\n    NgaAuthComponent,\n    NgaAuthBlockComponent,\n    NgaLoginComponent,\n    NgaRegisterComponent,\n    NgaRequestPasswordComponent,\n    NgaResetPasswordComponent,\n    NgaLogoutComponent,\n  ],\n}"
              }
            }
          ],
          "children": [
            {
              "id": 1163,
              "name": "constructor",
              "kind": 512,
              "kindString": "Constructor",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 1164,
                  "name": "new NgaAuthModule",
                  "kind": 16384,
                  "kindString": "Constructor signature",
                  "flags": {},
                  "parameters": [
                    {
                      "id": 1165,
                      "name": "parentModule",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {},
                      "decorators": [
                        {
                          "name": "Optional",
                          "type": {
                            "type": "reference",
                            "name": "Optional"
                          },
                          "arguments": {}
                        },
                        {
                          "name": "SkipSelf",
                          "type": {
                            "type": "reference",
                            "name": "SkipSelf"
                          },
                          "arguments": {}
                        }
                      ],
                      "type": {
                        "type": "reference",
                        "name": "NgaAuthModule",
                        "id": 1162
                      }
                    }
                  ],
                  "type": {
                    "type": "reference",
                    "name": "NgaAuthModule",
                    "id": 1162
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/auth/auth.module.ts",
                  "line": 69,
                  "character": 28
                }
              ]
            },
            {
              "id": 1166,
              "name": "forRoot",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isStatic": true,
                "isExported": true
              },
              "signatures": [
                {
                  "id": 1167,
                  "name": "forRoot",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "parameters": [
                    {
                      "id": 1168,
                      "name": "ngaAuthOptions",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {
                        "isOptional": true
                      },
                      "type": {
                        "type": "reference",
                        "name": "NgaAuthOptions",
                        "id": 624
                      }
                    }
                  ],
                  "type": {
                    "type": "reference",
                    "name": "ModuleWithProviders"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/auth/auth.module.ts",
                  "line": 77,
                  "character": 16
                }
              ]
            }
          ],
          "groups": [
            {
              "title": "Constructors",
              "kind": 512,
              "children": [
                1163
              ]
            },
            {
              "title": "Methods",
              "kind": 2048,
              "children": [
                1166
              ]
            }
          ],
          "sources": [
            {
              "fileName": "src/framework/auth/auth.module.ts",
              "line": 69,
              "character": 26
            }
          ]
        },
        {
          "id": 1169,
          "name": "ngaAuthServiceFactory",
          "kind": 64,
          "kindString": "Function",
          "flags": {
            "isExported": true
          },
          "signatures": [
            {
              "id": 1170,
              "name": "ngaAuthServiceFactory",
              "kind": 4096,
              "kindString": "Call signature",
              "flags": {},
              "parameters": [
                {
                  "id": 1171,
                  "name": "config",
                  "kind": 32768,
                  "kindString": "Parameter",
                  "flags": {},
                  "type": {
                    "type": "instrinct",
                    "name": "any"
                  }
                },
                {
                  "id": 1172,
                  "name": "tokenService",
                  "kind": 32768,
                  "kindString": "Parameter",
                  "flags": {},
                  "type": {
                    "type": "reference",
                    "name": "NgaTokenService",
                    "id": 680
                  }
                },
                {
                  "id": 1173,
                  "name": "injector",
                  "kind": 32768,
                  "kindString": "Parameter",
                  "flags": {},
                  "type": {
                    "type": "reference",
                    "name": "Injector"
                  }
                }
              ],
              "type": {
                "type": "reference",
                "name": "NgaAuthService",
                "id": 746
              }
            }
          ],
          "sources": [
            {
              "fileName": "src/framework/auth/auth.module.ts",
              "line": 29,
              "character": 37
            }
          ]
        }
      ],
      "groups": [
        {
          "title": "Classes",
          "kind": 128,
          "children": [
            1162
          ]
        },
        {
          "title": "Functions",
          "kind": 64,
          "children": [
            1169
          ]
        }
      ],
      "sources": [
        {
          "fileName": "src/framework/auth/auth.module.ts",
          "line": 1,
          "character": 0
        }
      ]
    },
    {
      "id": 623,
      "name": "\"src/framework/auth/auth.options\"",
      "kind": 1,
      "kindString": "External module",
      "flags": {
        "isExported": true
      },
      "originalName": "/Users/nixa/Development/Projects/Akveo/ng2-admin/src/framework/auth/auth.options.ts",
      "children": [
        {
          "id": 624,
          "name": "NgaAuthOptions",
          "kind": 256,
          "kindString": "Interface",
          "flags": {
            "isExported": true
          },
          "children": [
            {
              "id": 625,
              "name": "providers",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isExported": true,
                "isOptional": true
              },
              "sources": [
                {
                  "fileName": "src/framework/auth/auth.options.ts",
                  "line": 4,
                  "character": 11
                }
              ],
              "type": {
                "type": "instrinct",
                "name": "any"
              }
            }
          ],
          "groups": [
            {
              "title": "Properties",
              "kind": 1024,
              "children": [
                625
              ]
            }
          ],
          "sources": [
            {
              "fileName": "src/framework/auth/auth.options.ts",
              "line": 3,
              "character": 31
            }
          ]
        },
        {
          "id": 626,
          "name": "ngaAuthOptionsToken",
          "kind": 32,
          "kindString": "Variable",
          "flags": {
            "isExported": true
          },
          "sources": [
            {
              "fileName": "src/framework/auth/auth.options.ts",
              "line": 7,
              "character": 32
            }
          ],
          "type": {
            "type": "reference",
            "name": "InjectionToken",
            "typeArguments": [
              {
                "type": "reference",
                "name": "NgaAuthOptions",
                "id": 624
              }
            ]
          },
          "defaultValue": " new InjectionToken<NgaAuthOptions>('NGA_AUTH_OPTIONS')"
        }
      ],
      "groups": [
        {
          "title": "Interfaces",
          "kind": 256,
          "children": [
            624
          ]
        },
        {
          "title": "Variables",
          "kind": 32,
          "children": [
            626
          ]
        }
      ],
      "sources": [
        {
          "fileName": "src/framework/auth/auth.options.ts",
          "line": 1,
          "character": 0
        }
      ]
    },
    {
      "id": 1159,
      "name": "\"src/framework/auth/auth.routes\"",
      "kind": 1,
      "kindString": "External module",
      "flags": {
        "isExported": true
      },
      "originalName": "/Users/nixa/Development/Projects/Akveo/ng2-admin/src/framework/auth/auth.routes.ts",
      "children": [
        {
          "id": 1160,
          "name": "routes",
          "kind": 32,
          "kindString": "Variable",
          "flags": {
            "isExported": true
          },
          "sources": [
            {
              "fileName": "src/framework/auth/auth.routes.ts",
              "line": 15,
              "character": 19
            }
          ],
          "type": {
            "type": "reference",
            "name": "Routes"
          },
          "defaultValue": " [\n  {\n    path: 'auth',\n    component: NgaAuthComponent,\n    children: [\n      {\n        path: '',\n        component: NgaLoginComponent,\n      },\n      {\n        path: 'login',\n        component: NgaLoginComponent,\n      },\n      {\n        path: 'register',\n        component: NgaRegisterComponent,\n      },\n      {\n        path: 'logout',\n        component: NgaLogoutComponent,\n      },\n      {\n        path: 'request-password',\n        component: NgaRequestPasswordComponent,\n      },\n      {\n        path: 'reset-password',\n        component: NgaResetPasswordComponent,\n      },\n    ],\n  },\n]"
        }
      ],
      "groups": [
        {
          "title": "Variables",
          "kind": 32,
          "children": [
            1160
          ]
        }
      ],
      "sources": [
        {
          "fileName": "src/framework/auth/auth.routes.ts",
          "line": 1,
          "character": 0
        }
      ]
    },
    {
      "id": 1043,
      "name": "\"src/framework/auth/components/auth-block/auth-block.component\"",
      "kind": 1,
      "kindString": "External module",
      "flags": {
        "isExported": true
      },
      "originalName": "/Users/nixa/Development/Projects/Akveo/ng2-admin/src/framework/auth/components/auth-block/auth-block.component.ts",
      "children": [
        {
          "id": 1044,
          "name": "NgaAuthBlockComponent",
          "kind": 128,
          "kindString": "Class",
          "flags": {
            "isExported": true
          },
          "decorators": [
            {
              "name": "Component",
              "type": {
                "type": "reference",
                "name": "Component"
              },
              "arguments": {
                "obj": "{\n  selector: 'nga-auth-block',\n  styleUrls: ['./auth-block.component.scss'],\n  template: `\n    <div class=\"auth-block\">\n      <router-outlet></router-outlet>\n    </div>\n  `,\n}"
              }
            }
          ],
          "sources": [
            {
              "fileName": "src/framework/auth/components/auth-block/auth-block.component.ts",
              "line": 17,
              "character": 34
            }
          ]
        }
      ],
      "groups": [
        {
          "title": "Classes",
          "kind": 128,
          "children": [
            1044
          ]
        }
      ],
      "sources": [
        {
          "fileName": "src/framework/auth/components/auth-block/auth-block.component.ts",
          "line": 1,
          "character": 0
        }
      ]
    },
    {
      "id": 991,
      "name": "\"src/framework/auth/components/auth.component\"",
      "kind": 1,
      "kindString": "External module",
      "flags": {
        "isExported": true
      },
      "originalName": "/Users/nixa/Development/Projects/Akveo/ng2-admin/src/framework/auth/components/auth.component.ts",
      "children": [
        {
          "id": 992,
          "name": "NgaAuthComponent",
          "kind": 128,
          "kindString": "Class",
          "flags": {
            "isExported": true
          },
          "decorators": [
            {
              "name": "Component",
              "type": {
                "type": "reference",
                "name": "Component"
              },
              "arguments": {
                "obj": "{\n  selector: 'nga-auth',\n  template: `\n    <nga-layout>\n      <nga-layout-column>\n        <nga-auth-block></nga-auth-block>\n      </nga-layout-column>\n    </nga-layout>\n  `,\n}"
              }
            }
          ],
          "children": [
            {
              "id": 996,
              "name": "constructor",
              "kind": 512,
              "kindString": "Constructor",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 998,
                  "name": "new NgaAuthComponent",
                  "kind": 16384,
                  "kindString": "Constructor signature",
                  "flags": {},
                  "parameters": [
                    {
                      "id": 999,
                      "name": "auth",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {},
                      "type": {
                        "type": "reference",
                        "name": "NgaAuthService",
                        "id": 746
                      }
                    }
                  ],
                  "type": {
                    "type": "reference",
                    "name": "NgaAuthComponent",
                    "id": 992
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/auth/components/auth.component.ts",
                  "line": 24,
                  "character": 21
                }
              ]
            },
            {
              "id": 997,
              "name": "auth",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isConstructorProperty": true,
                "isExported": true,
                "isProtected": true
              },
              "sources": [
                {
                  "fileName": "src/framework/auth/components/auth.component.ts",
                  "line": 27,
                  "character": 28
                }
              ],
              "type": {
                "type": "reference",
                "name": "NgaAuthService",
                "id": 746
              }
            },
            {
              "id": 994,
              "name": "authenticated",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isExported": true
              },
              "sources": [
                {
                  "fileName": "src/framework/auth/components/auth.component.ts",
                  "line": 23,
                  "character": 15
                }
              ],
              "type": {
                "type": "instrinct",
                "name": "boolean"
              },
              "defaultValue": "false"
            },
            {
              "id": 993,
              "name": "subscription",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isExported": true
              },
              "sources": [
                {
                  "fileName": "src/framework/auth/components/auth.component.ts",
                  "line": 21,
                  "character": 14
                }
              ],
              "type": {
                "type": "instrinct",
                "name": "any"
              }
            },
            {
              "id": 995,
              "name": "token",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isExported": true
              },
              "sources": [
                {
                  "fileName": "src/framework/auth/components/auth.component.ts",
                  "line": 24,
                  "character": 7
                }
              ],
              "type": {
                "type": "instrinct",
                "name": "string"
              },
              "defaultValue": "\"\""
            },
            {
              "id": 1000,
              "name": "ngOnDestroy",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 1001,
                  "name": "ngOnDestroy",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "type": {
                    "type": "instrinct",
                    "name": "void"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/auth/components/auth.component.ts",
                  "line": 35,
                  "character": 13
                }
              ]
            }
          ],
          "groups": [
            {
              "title": "Constructors",
              "kind": 512,
              "children": [
                996
              ]
            },
            {
              "title": "Properties",
              "kind": 1024,
              "children": [
                997,
                994,
                993,
                995
              ]
            },
            {
              "title": "Methods",
              "kind": 2048,
              "children": [
                1000
              ]
            }
          ],
          "sources": [
            {
              "fileName": "src/framework/auth/components/auth.component.ts",
              "line": 19,
              "character": 29
            }
          ],
          "implementedTypes": [
            {
              "type": "reference",
              "name": "OnDestroy"
            }
          ]
        }
      ],
      "groups": [
        {
          "title": "Classes",
          "kind": 128,
          "children": [
            992
          ]
        }
      ],
      "sources": [
        {
          "fileName": "src/framework/auth/components/auth.component.ts",
          "line": 1,
          "character": 0
        }
      ]
    },
    {
      "id": 1063,
      "name": "\"src/framework/auth/components/login/login.component\"",
      "kind": 1,
      "kindString": "External module",
      "flags": {
        "isExported": true
      },
      "originalName": "/Users/nixa/Development/Projects/Akveo/ng2-admin/src/framework/auth/components/login/login.component.ts",
      "children": [
        {
          "id": 1064,
          "name": "NgaLoginComponent",
          "kind": 128,
          "kindString": "Class",
          "flags": {
            "isExported": true
          },
          "decorators": [
            {
              "name": "Component",
              "type": {
                "type": "reference",
                "name": "Component"
              },
              "arguments": {
                "obj": "{\n  selector: 'nga-login',\n  styleUrls: ['./login.component.scss'],\n  template: `\n    <h2>Please sign in</h2>\n    <form (ngSubmit)=\"login('email')\" #loginForm=\"ngForm\">\n      \n      <div *ngIf=\"errors && errors.length > 0 && !submitted\" class=\"alert alert-danger\" role=\"alert\">\n        <div><strong>Oh snap!</strong></div>\n        <div *ngFor=\"let error of errors\">{{ error }}</div>\n      </div>\n      <div *ngIf=\"messages && messages.length > 0 && !submitted\" class=\"alert alert-success\" role=\"alert\">\n        <div><strong>Hooray!</strong></div>\n        <div *ngFor=\"let message of messages\">{{ message }}</div>\n      </div>\n      \n      <label for=\"input-email\" class=\"sr-only\">Email address</label>\n      <input name=\"email\" [(ngModel)]=\"user.email\" type=\"email\" id=\"input-email\" \n        class=\"form-control form-control-lg first\" placeholder=\"Email address\" \n             [required]=\"getConfigValue('email', 'validation.email.required')\"\n             autofocus>\n        \n      <label for=\"input-password\" class=\"sr-only\">Password</label>\n      <input name=\"password\" [(ngModel)]=\"user.password\" type=\"password\" id=\"input-password\" \n        class=\"form-control form-control-lg last\" placeholder=\"Password\" \n             [required]=\"getConfigValue('email', 'validation.password.required')\"\n             [minlength]=\"getConfigValue('email', 'validation.password.minLength')\"\n             [maxlength]=\"getConfigValue('email', 'validation.password.maxLength')\">\n      \n      <div class=\"checkbox\" *ngIf=\"getConfigValue('email', 'login.rememberMe')\">\n        <label>\n          <input name=\"rememberMe\" [(ngModel)]=\"user.rememberMe\" type=\"checkbox\" value=\"remember-me\"> Remember me\n        </label>\n        <a routerLink=\"../request-password\">Forgot Password</a>\n      </div>\n      <button [disabled]=\"submitted || !loginForm.form.valid\" \n        class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Sign in</button>\n    </form>\n    \n    <div class=\"links\">\n      Don't have an account? <a routerLink=\"../register\">Register</a>\n    </div>\n  `,\n}"
              }
            }
          ],
          "children": [
            {
              "id": 1070,
              "name": "constructor",
              "kind": 512,
              "kindString": "Constructor",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 1073,
                  "name": "new NgaLoginComponent",
                  "kind": 16384,
                  "kindString": "Constructor signature",
                  "flags": {},
                  "parameters": [
                    {
                      "id": 1074,
                      "name": "service",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {},
                      "type": {
                        "type": "reference",
                        "name": "NgaAuthService",
                        "id": 746
                      }
                    },
                    {
                      "id": 1075,
                      "name": "router",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {},
                      "type": {
                        "type": "reference",
                        "name": "Router"
                      }
                    }
                  ],
                  "type": {
                    "type": "reference",
                    "name": "NgaLoginComponent",
                    "id": 1064
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/auth/components/login/login.component.ts",
                  "line": 63,
                  "character": 32
                }
              ]
            },
            {
              "id": 1067,
              "name": "errors",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isExported": true
              },
              "sources": [
                {
                  "fileName": "src/framework/auth/components/login/login.component.ts",
                  "line": 61,
                  "character": 8
                }
              ],
              "type": {
                "type": "instrinct",
                "isArray": true,
                "name": "string"
              },
              "defaultValue": " []"
            },
            {
              "id": 1068,
              "name": "messages",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isExported": true
              },
              "sources": [
                {
                  "fileName": "src/framework/auth/components/login/login.component.ts",
                  "line": 62,
                  "character": 10
                }
              ],
              "type": {
                "type": "instrinct",
                "isArray": true,
                "name": "string"
              },
              "defaultValue": " []"
            },
            {
              "id": 1065,
              "name": "redirectDelay",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isExported": true
              },
              "sources": [
                {
                  "fileName": "src/framework/auth/components/login/login.component.ts",
                  "line": 59,
                  "character": 15
                }
              ],
              "type": {
                "type": "instrinct",
                "name": "number"
              },
              "defaultValue": "1500"
            },
            {
              "id": 1072,
              "name": "router",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isConstructorProperty": true,
                "isExported": true,
                "isProtected": true
              },
              "sources": [
                {
                  "fileName": "src/framework/auth/components/login/login.component.ts",
                  "line": 66,
                  "character": 30
                }
              ],
              "type": {
                "type": "reference",
                "name": "Router"
              }
            },
            {
              "id": 1071,
              "name": "service",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isConstructorProperty": true,
                "isExported": true,
                "isProtected": true
              },
              "sources": [
                {
                  "fileName": "src/framework/auth/components/login/login.component.ts",
                  "line": 65,
                  "character": 31
                }
              ],
              "type": {
                "type": "reference",
                "name": "NgaAuthService",
                "id": 746
              }
            },
            {
              "id": 1066,
              "name": "submitted",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isExported": true
              },
              "sources": [
                {
                  "fileName": "src/framework/auth/components/login/login.component.ts",
                  "line": 60,
                  "character": 11
                }
              ],
              "type": {
                "type": "instrinct",
                "name": "boolean"
              },
              "defaultValue": "false"
            },
            {
              "id": 1069,
              "name": "user",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isExported": true
              },
              "sources": [
                {
                  "fileName": "src/framework/auth/components/login/login.component.ts",
                  "line": 63,
                  "character": 6
                }
              ],
              "type": {
                "type": "reference",
                "name": "NgaUser",
                "id": 1046
              },
              "defaultValue": " new NgaUser()"
            },
            {
              "id": 1079,
              "name": "getConfigValue",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 1080,
                  "name": "getConfigValue",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "parameters": [
                    {
                      "id": 1081,
                      "name": "provider",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {},
                      "type": {
                        "type": "instrinct",
                        "name": "string"
                      }
                    },
                    {
                      "id": 1082,
                      "name": "key",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {},
                      "type": {
                        "type": "instrinct",
                        "name": "string"
                      }
                    }
                  ],
                  "type": {
                    "type": "instrinct",
                    "name": "any"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/auth/components/login/login.component.ts",
                  "line": 90,
                  "character": 16
                }
              ]
            },
            {
              "id": 1076,
              "name": "login",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 1077,
                  "name": "login",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "parameters": [
                    {
                      "id": 1078,
                      "name": "provider",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {},
                      "type": {
                        "type": "instrinct",
                        "name": "string"
                      }
                    }
                  ],
                  "type": {
                    "type": "instrinct",
                    "name": "void"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/auth/components/login/login.component.ts",
                  "line": 69,
                  "character": 7
                }
              ]
            }
          ],
          "groups": [
            {
              "title": "Constructors",
              "kind": 512,
              "children": [
                1070
              ]
            },
            {
              "title": "Properties",
              "kind": 1024,
              "children": [
                1067,
                1068,
                1065,
                1072,
                1071,
                1066,
                1069
              ]
            },
            {
              "title": "Methods",
              "kind": 2048,
              "children": [
                1079,
                1076
              ]
            }
          ],
          "sources": [
            {
              "fileName": "src/framework/auth/components/login/login.component.ts",
              "line": 57,
              "character": 30
            }
          ]
        }
      ],
      "groups": [
        {
          "title": "Classes",
          "kind": 128,
          "children": [
            1064
          ]
        }
      ],
      "sources": [
        {
          "fileName": "src/framework/auth/components/login/login.component.ts",
          "line": 1,
          "character": 0
        }
      ]
    },
    {
      "id": 1105,
      "name": "\"src/framework/auth/components/logout/logout.component\"",
      "kind": 1,
      "kindString": "External module",
      "flags": {
        "isExported": true
      },
      "originalName": "/Users/nixa/Development/Projects/Akveo/ng2-admin/src/framework/auth/components/logout/logout.component.ts",
      "children": [
        {
          "id": 1106,
          "name": "NgaLogoutComponent",
          "kind": 128,
          "kindString": "Class",
          "flags": {
            "isExported": true
          },
          "decorators": [
            {
              "name": "Component",
              "type": {
                "type": "reference",
                "name": "Component"
              },
              "arguments": {
                "obj": "{\n  selector: 'nga-logout',\n  template: `\n    <div>Logging out, please wait...</div>\n  `,\n}"
              }
            }
          ],
          "children": [
            {
              "id": 1108,
              "name": "constructor",
              "kind": 512,
              "kindString": "Constructor",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 1111,
                  "name": "new NgaLogoutComponent",
                  "kind": 16384,
                  "kindString": "Constructor signature",
                  "flags": {},
                  "parameters": [
                    {
                      "id": 1112,
                      "name": "service",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {},
                      "type": {
                        "type": "reference",
                        "name": "NgaAuthService",
                        "id": 746
                      }
                    },
                    {
                      "id": 1113,
                      "name": "router",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {},
                      "type": {
                        "type": "reference",
                        "name": "Router"
                      }
                    }
                  ],
                  "type": {
                    "type": "reference",
                    "name": "NgaLogoutComponent",
                    "id": 1106
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/auth/components/logout/logout.component.ts",
                  "line": 19,
                  "character": 31
                }
              ]
            },
            {
              "id": 1107,
              "name": "redirectDelay",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isExported": true
              },
              "sources": [
                {
                  "fileName": "src/framework/auth/components/logout/logout.component.ts",
                  "line": 19,
                  "character": 15
                }
              ],
              "type": {
                "type": "instrinct",
                "name": "number"
              },
              "defaultValue": "1500"
            },
            {
              "id": 1110,
              "name": "router",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isConstructorProperty": true,
                "isExported": true,
                "isProtected": true
              },
              "sources": [
                {
                  "fileName": "src/framework/auth/components/logout/logout.component.ts",
                  "line": 22,
                  "character": 30
                }
              ],
              "type": {
                "type": "reference",
                "name": "Router"
              }
            },
            {
              "id": 1109,
              "name": "service",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isConstructorProperty": true,
                "isExported": true,
                "isProtected": true
              },
              "sources": [
                {
                  "fileName": "src/framework/auth/components/logout/logout.component.ts",
                  "line": 21,
                  "character": 31
                }
              ],
              "type": {
                "type": "reference",
                "name": "NgaAuthService",
                "id": 746
              }
            },
            {
              "id": 1116,
              "name": "logout",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 1117,
                  "name": "logout",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "parameters": [
                    {
                      "id": 1118,
                      "name": "provider",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {},
                      "type": {
                        "type": "instrinct",
                        "name": "string"
                      }
                    }
                  ],
                  "type": {
                    "type": "instrinct",
                    "name": "void"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/auth/components/logout/logout.component.ts",
                  "line": 29,
                  "character": 8
                }
              ]
            },
            {
              "id": 1114,
              "name": "ngOnInit",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 1115,
                  "name": "ngOnInit",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "type": {
                    "type": "instrinct",
                    "name": "void"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/auth/components/logout/logout.component.ts",
                  "line": 25,
                  "character": 10
                }
              ]
            }
          ],
          "groups": [
            {
              "title": "Constructors",
              "kind": 512,
              "children": [
                1108
              ]
            },
            {
              "title": "Properties",
              "kind": 1024,
              "children": [
                1107,
                1110,
                1109
              ]
            },
            {
              "title": "Methods",
              "kind": 2048,
              "children": [
                1116,
                1114
              ]
            }
          ],
          "sources": [
            {
              "fileName": "src/framework/auth/components/logout/logout.component.ts",
              "line": 17,
              "character": 31
            }
          ],
          "implementedTypes": [
            {
              "type": "reference",
              "name": "OnInit"
            }
          ]
        }
      ],
      "groups": [
        {
          "title": "Classes",
          "kind": 128,
          "children": [
            1106
          ]
        }
      ],
      "sources": [
        {
          "fileName": "src/framework/auth/components/logout/logout.component.ts",
          "line": 1,
          "character": 0
        }
      ]
    },
    {
      "id": 1083,
      "name": "\"src/framework/auth/components/register/register.component\"",
      "kind": 1,
      "kindString": "External module",
      "flags": {
        "isExported": true
      },
      "originalName": "/Users/nixa/Development/Projects/Akveo/ng2-admin/src/framework/auth/components/register/register.component.ts",
      "children": [
        {
          "id": 1084,
          "name": "NgaRegisterComponent",
          "kind": 128,
          "kindString": "Class",
          "flags": {
            "isExported": true
          },
          "decorators": [
            {
              "name": "Component",
              "type": {
                "type": "reference",
                "name": "Component"
              },
              "arguments": {
                "obj": "{\n  selector: 'nga-register',\n  styleUrls: ['./register.component.scss'],\n  template: `\n    <h2>Create new account</h2>\n    <form (ngSubmit)=\"register('email')\" #registerForm=\"ngForm\">\n      <div *ngIf=\"errors && errors.length > 0 && !submitted\" class=\"alert alert-danger\" role=\"alert\">\n        <div><strong>Oh snap!</strong></div>\n        <div *ngFor=\"let error of errors\">{{ error }}</div>\n      </div>\n      <div *ngIf=\"messages && messages.length > 0 && !submitted\" class=\"alert alert-success\" role=\"alert\">\n        <div><strong>Hooray!</strong></div>\n        <div *ngFor=\"let message of messages\">{{ message }}</div>\n      </div>\n      \n      <label for=\"input-name\" class=\"sr-only\">Full name</label>\n      <input name=\"fullName\" [(ngModel)]=\"user.fullName\" type=\"text\" id=\"input-name\" \n        class=\"form-control form-control-lg first\" placeholder=\"Full name\"\n             [required]=\"getConfigValue('email', 'validation.fullName.required')\"\n             [minlength]=\"getConfigValue('email', 'validation.fullName.minLength')\"\n             [maxlength]=\"getConfigValue('email', 'validation.fullName.maxLength')\"\n             autofocus>\n      \n      <label for=\"input-email\" class=\"sr-only\">Email address</label>\n      <input name=\"email\" [(ngModel)]=\"user.email\" type=\"email\" id=\"input-email\" \n        class=\"form-control form-control-lg middle\" placeholder=\"Email address\"\n             [required]=\"getConfigValue('email', 'validation.email.required')\">\n      \n      <label for=\"input-password\" class=\"sr-only\">Password</label>\n      <input name=\"password\" [(ngModel)]=\"user.password\" type=\"password\" id=\"input-password\" \n        class=\"form-control form-control-lg middle\" placeholder=\"Password\"\n             [required]=\"getConfigValue('email', 'validation.password.required')\"\n             [minlength]=\"getConfigValue('email', 'validation.password.minLength')\"\n             [maxlength]=\"getConfigValue('email', 'validation.password.maxLength')\">\n      \n      <label for=\"input-re-password\" class=\"sr-only\">Repeat password</label>\n      <input name=\"confirmPassword\" [(ngModel)]=\"user.confirmPassword\" type=\"password\" id=\"input-re-password\" \n        class=\"form-control form-control-lg last\" placeholder=\"Confirm Password\"\n             [required]=\"getConfigValue('email', 'validation.password.required')\"\n             [minlength]=\"getConfigValue('email', 'validation.password.minLength')\"\n             [maxlength]=\"getConfigValue('email', 'validation.password.maxLength')\">\n      \n      <div class=\"checkbox\" *ngIf=\"getConfigValue('email', 'register.terms')\">\n        <label>\n          <input name=\"rememberMe\" [(ngModel)]=\"user.terms\" \n            type=\"checkbox\" value=\"remember-me\"> Agree to <a href=\"#\" target=\"_blank\">Terms & Conditions</a>\n        </label>\n      </div>\n      <button [disabled]=\"submitted || !registerForm.form.valid\" \n        class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Register</button>\n    </form>\n    \n    <div class=\"links\">\n      Already have an account? <a routerLink=\"../login\">Sign in</a>\n    </div>\n  `,\n}"
              }
            }
          ],
          "children": [
            {
              "id": 1090,
              "name": "constructor",
              "kind": 512,
              "kindString": "Constructor",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 1094,
                  "name": "new NgaRegisterComponent",
                  "kind": 16384,
                  "kindString": "Constructor signature",
                  "flags": {},
                  "parameters": [
                    {
                      "id": 1095,
                      "name": "service",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {},
                      "type": {
                        "type": "reference",
                        "name": "NgaAuthService",
                        "id": 746
                      }
                    },
                    {
                      "id": 1096,
                      "name": "tokenService",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {},
                      "type": {
                        "type": "reference",
                        "name": "NgaTokenService",
                        "id": 680
                      }
                    },
                    {
                      "id": 1097,
                      "name": "router",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {},
                      "type": {
                        "type": "reference",
                        "name": "Router"
                      }
                    }
                  ],
                  "type": {
                    "type": "reference",
                    "name": "NgaRegisterComponent",
                    "id": 1084
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/auth/components/register/register.component.ts",
                  "line": 76,
                  "character": 32
                }
              ]
            },
            {
              "id": 1087,
              "name": "errors",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isExported": true
              },
              "sources": [
                {
                  "fileName": "src/framework/auth/components/register/register.component.ts",
                  "line": 74,
                  "character": 8
                }
              ],
              "type": {
                "type": "instrinct",
                "isArray": true,
                "name": "string"
              },
              "defaultValue": " []"
            },
            {
              "id": 1088,
              "name": "messages",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isExported": true
              },
              "sources": [
                {
                  "fileName": "src/framework/auth/components/register/register.component.ts",
                  "line": 75,
                  "character": 10
                }
              ],
              "type": {
                "type": "instrinct",
                "isArray": true,
                "name": "string"
              },
              "defaultValue": " []"
            },
            {
              "id": 1085,
              "name": "redirectDelay",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isExported": true
              },
              "sources": [
                {
                  "fileName": "src/framework/auth/components/register/register.component.ts",
                  "line": 72,
                  "character": 15
                }
              ],
              "type": {
                "type": "instrinct",
                "name": "number"
              },
              "defaultValue": "1500"
            },
            {
              "id": 1093,
              "name": "router",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isConstructorProperty": true,
                "isExported": true,
                "isProtected": true
              },
              "sources": [
                {
                  "fileName": "src/framework/auth/components/register/register.component.ts",
                  "line": 80,
                  "character": 30
                }
              ],
              "type": {
                "type": "reference",
                "name": "Router"
              }
            },
            {
              "id": 1091,
              "name": "service",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isConstructorProperty": true,
                "isExported": true,
                "isProtected": true
              },
              "sources": [
                {
                  "fileName": "src/framework/auth/components/register/register.component.ts",
                  "line": 78,
                  "character": 31
                }
              ],
              "type": {
                "type": "reference",
                "name": "NgaAuthService",
                "id": 746
              }
            },
            {
              "id": 1086,
              "name": "submitted",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isExported": true
              },
              "sources": [
                {
                  "fileName": "src/framework/auth/components/register/register.component.ts",
                  "line": 73,
                  "character": 11
                }
              ],
              "type": {
                "type": "instrinct",
                "name": "boolean"
              },
              "defaultValue": "false"
            },
            {
              "id": 1092,
              "name": "tokenService",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isConstructorProperty": true,
                "isExported": true,
                "isProtected": true
              },
              "sources": [
                {
                  "fileName": "src/framework/auth/components/register/register.component.ts",
                  "line": 79,
                  "character": 36
                }
              ],
              "type": {
                "type": "reference",
                "name": "NgaTokenService",
                "id": 680
              }
            },
            {
              "id": 1089,
              "name": "user",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isExported": true
              },
              "sources": [
                {
                  "fileName": "src/framework/auth/components/register/register.component.ts",
                  "line": 76,
                  "character": 6
                }
              ],
              "type": {
                "type": "reference",
                "name": "NgaUser",
                "id": 1046
              },
              "defaultValue": " new NgaUser()"
            },
            {
              "id": 1101,
              "name": "getConfigValue",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 1102,
                  "name": "getConfigValue",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "parameters": [
                    {
                      "id": 1103,
                      "name": "provider",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {},
                      "type": {
                        "type": "instrinct",
                        "name": "string"
                      }
                    },
                    {
                      "id": 1104,
                      "name": "key",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {},
                      "type": {
                        "type": "instrinct",
                        "name": "string"
                      }
                    }
                  ],
                  "type": {
                    "type": "instrinct",
                    "name": "any"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/auth/components/register/register.component.ts",
                  "line": 104,
                  "character": 16
                }
              ]
            },
            {
              "id": 1098,
              "name": "register",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 1099,
                  "name": "register",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "parameters": [
                    {
                      "id": 1100,
                      "name": "provider",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {},
                      "type": {
                        "type": "instrinct",
                        "name": "string"
                      }
                    }
                  ],
                  "type": {
                    "type": "instrinct",
                    "name": "void"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/auth/components/register/register.component.ts",
                  "line": 83,
                  "character": 10
                }
              ]
            }
          ],
          "groups": [
            {
              "title": "Constructors",
              "kind": 512,
              "children": [
                1090
              ]
            },
            {
              "title": "Properties",
              "kind": 1024,
              "children": [
                1087,
                1088,
                1085,
                1093,
                1091,
                1086,
                1092,
                1089
              ]
            },
            {
              "title": "Methods",
              "kind": 2048,
              "children": [
                1101,
                1098
              ]
            }
          ],
          "sources": [
            {
              "fileName": "src/framework/auth/components/register/register.component.ts",
              "line": 70,
              "character": 33
            }
          ]
        }
      ],
      "groups": [
        {
          "title": "Classes",
          "kind": 128,
          "children": [
            1084
          ]
        }
      ],
      "sources": [
        {
          "fileName": "src/framework/auth/components/register/register.component.ts",
          "line": 1,
          "character": 0
        }
      ]
    },
    {
      "id": 1119,
      "name": "\"src/framework/auth/components/request-password/request-password.component\"",
      "kind": 1,
      "kindString": "External module",
      "flags": {
        "isExported": true
      },
      "originalName": "/Users/nixa/Development/Projects/Akveo/ng2-admin/src/framework/auth/components/request-password/request-password.component.ts",
      "children": [
        {
          "id": 1120,
          "name": "NgaRequestPasswordComponent",
          "kind": 128,
          "kindString": "Class",
          "flags": {
            "isExported": true
          },
          "decorators": [
            {
              "name": "Component",
              "type": {
                "type": "reference",
                "name": "Component"
              },
              "arguments": {
                "obj": "{\n  selector: 'nga-request-password-page',\n  styleUrls: ['./request-password.component.scss'],\n  template: `\n    <h2>Request password reset</h2>\n    <form (ngSubmit)=\"requestPass('email')\" #requestPassForm=\"ngForm\">\n\n      <div *ngIf=\"errors && errors.length > 0 && !submitted\" class=\"alert alert-danger\" role=\"alert\">\n        <div><strong>Oh snap!</strong></div>\n        <div *ngFor=\"let error of errors\">{{ error }}</div>\n      </div>\n      <div *ngIf=\"messages && messages.length > 0 && !submitted\" class=\"alert alert-success\" role=\"alert\">\n        <div><strong>Hooray!</strong></div>\n        <div *ngFor=\"let message of messages\">{{ message }}</div>\n      </div>\n      \n      <label for=\"input-email\" class=\"sr-only\">Enter your email address</label>\n      <input name=\"email\" [(ngModel)]=\"user.email\" type=\"email\" id=\"input-email\" \n        class=\"form-control form-control-lg\" placeholder=\"Email address\"\n             [required]=\"getConfigValue('email', 'validation.email.required')\"\n             autofocus>\n      <div class=\"checkbox\"></div>\n      \n      <button [disabled]=\"submitted || !requestPassForm.form.valid\" \n        class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Request password</button>\n    </form>\n    \n    <div class=\"links\">\n      <a routerLink=\"../login\">Login</a> or <a routerLink=\"../register\">Register</a>\n    </div>\n  `,\n}"
              }
            }
          ],
          "children": [
            {
              "id": 1126,
              "name": "constructor",
              "kind": 512,
              "kindString": "Constructor",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 1129,
                  "name": "new NgaRequestPasswordComponent",
                  "kind": 16384,
                  "kindString": "Constructor signature",
                  "flags": {},
                  "parameters": [
                    {
                      "id": 1130,
                      "name": "service",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {},
                      "type": {
                        "type": "reference",
                        "name": "NgaAuthService",
                        "id": 746
                      }
                    },
                    {
                      "id": 1131,
                      "name": "router",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {},
                      "type": {
                        "type": "reference",
                        "name": "Router"
                      }
                    }
                  ],
                  "type": {
                    "type": "reference",
                    "name": "NgaRequestPasswordComponent",
                    "id": 1120
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/auth/components/request-password/request-password.component.ts",
                  "line": 50,
                  "character": 32
                }
              ]
            },
            {
              "id": 1123,
              "name": "errors",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isExported": true
              },
              "sources": [
                {
                  "fileName": "src/framework/auth/components/request-password/request-password.component.ts",
                  "line": 48,
                  "character": 8
                }
              ],
              "type": {
                "type": "instrinct",
                "isArray": true,
                "name": "string"
              },
              "defaultValue": " []"
            },
            {
              "id": 1124,
              "name": "messages",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isExported": true
              },
              "sources": [
                {
                  "fileName": "src/framework/auth/components/request-password/request-password.component.ts",
                  "line": 49,
                  "character": 10
                }
              ],
              "type": {
                "type": "instrinct",
                "isArray": true,
                "name": "string"
              },
              "defaultValue": " []"
            },
            {
              "id": 1121,
              "name": "redirectDelay",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isExported": true
              },
              "sources": [
                {
                  "fileName": "src/framework/auth/components/request-password/request-password.component.ts",
                  "line": 46,
                  "character": 15
                }
              ],
              "type": {
                "type": "instrinct",
                "name": "number"
              },
              "defaultValue": "1500"
            },
            {
              "id": 1128,
              "name": "router",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isConstructorProperty": true,
                "isExported": true,
                "isProtected": true
              },
              "sources": [
                {
                  "fileName": "src/framework/auth/components/request-password/request-password.component.ts",
                  "line": 53,
                  "character": 30
                }
              ],
              "type": {
                "type": "reference",
                "name": "Router"
              }
            },
            {
              "id": 1127,
              "name": "service",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isConstructorProperty": true,
                "isExported": true,
                "isProtected": true
              },
              "sources": [
                {
                  "fileName": "src/framework/auth/components/request-password/request-password.component.ts",
                  "line": 52,
                  "character": 31
                }
              ],
              "type": {
                "type": "reference",
                "name": "NgaAuthService",
                "id": 746
              }
            },
            {
              "id": 1122,
              "name": "submitted",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isExported": true
              },
              "sources": [
                {
                  "fileName": "src/framework/auth/components/request-password/request-password.component.ts",
                  "line": 47,
                  "character": 11
                }
              ],
              "type": {
                "type": "instrinct",
                "name": "boolean"
              },
              "defaultValue": "false"
            },
            {
              "id": 1125,
              "name": "user",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isExported": true
              },
              "sources": [
                {
                  "fileName": "src/framework/auth/components/request-password/request-password.component.ts",
                  "line": 50,
                  "character": 6
                }
              ],
              "type": {
                "type": "reference",
                "name": "NgaUser",
                "id": 1046
              },
              "defaultValue": " new NgaUser()"
            },
            {
              "id": 1135,
              "name": "getConfigValue",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 1136,
                  "name": "getConfigValue",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "parameters": [
                    {
                      "id": 1137,
                      "name": "provider",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {},
                      "type": {
                        "type": "instrinct",
                        "name": "string"
                      }
                    },
                    {
                      "id": 1138,
                      "name": "key",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {},
                      "type": {
                        "type": "instrinct",
                        "name": "string"
                      }
                    }
                  ],
                  "type": {
                    "type": "instrinct",
                    "name": "any"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/auth/components/request-password/request-password.component.ts",
                  "line": 77,
                  "character": 16
                }
              ]
            },
            {
              "id": 1132,
              "name": "requestPass",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 1133,
                  "name": "requestPass",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "parameters": [
                    {
                      "id": 1134,
                      "name": "provider",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {},
                      "type": {
                        "type": "instrinct",
                        "name": "string"
                      }
                    }
                  ],
                  "type": {
                    "type": "instrinct",
                    "name": "void"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/auth/components/request-password/request-password.component.ts",
                  "line": 56,
                  "character": 13
                }
              ]
            }
          ],
          "groups": [
            {
              "title": "Constructors",
              "kind": 512,
              "children": [
                1126
              ]
            },
            {
              "title": "Properties",
              "kind": 1024,
              "children": [
                1123,
                1124,
                1121,
                1128,
                1127,
                1122,
                1125
              ]
            },
            {
              "title": "Methods",
              "kind": 2048,
              "children": [
                1135,
                1132
              ]
            }
          ],
          "sources": [
            {
              "fileName": "src/framework/auth/components/request-password/request-password.component.ts",
              "line": 44,
              "character": 40
            }
          ]
        }
      ],
      "groups": [
        {
          "title": "Classes",
          "kind": 128,
          "children": [
            1120
          ]
        }
      ],
      "sources": [
        {
          "fileName": "src/framework/auth/components/request-password/request-password.component.ts",
          "line": 1,
          "character": 0
        }
      ]
    },
    {
      "id": 1139,
      "name": "\"src/framework/auth/components/reset-password/reset-password.component\"",
      "kind": 1,
      "kindString": "External module",
      "flags": {
        "isExported": true
      },
      "originalName": "/Users/nixa/Development/Projects/Akveo/ng2-admin/src/framework/auth/components/reset-password/reset-password.component.ts",
      "children": [
        {
          "id": 1140,
          "name": "NgaResetPasswordComponent",
          "kind": 128,
          "kindString": "Class",
          "flags": {
            "isExported": true
          },
          "decorators": [
            {
              "name": "Component",
              "type": {
                "type": "reference",
                "name": "Component"
              },
              "arguments": {
                "obj": "{\n  selector: 'nga-reset-password-page',\n  styleUrls: ['./reset-password.component.scss'],\n  template: `\n    <h2>Change password</h2>\n    <form (ngSubmit)=\"resetPass('email')\" #resetPassForm=\"ngForm\">\n      \n      <div *ngIf=\"errors && errors.length > 0 && !submitted\" class=\"alert alert-danger\" role=\"alert\">\n        <div><strong>Oh snap!</strong></div>\n        <div *ngFor=\"let error of errors\">{{ error }}</div>\n      </div>\n      <div *ngIf=\"messages && messages.length > 0 && !submitted\" class=\"alert alert-success\" role=\"alert\">\n        <div><strong>Hooray!</strong></div>\n        <div *ngFor=\"let message of messages\">{{ message }}</div>\n      </div>\n      \n      <label for=\"input-password\" class=\"sr-only\">New Password</label>\n      <input name=\"password\" [(ngModel)]=\"user.password\" type=\"password\" id=\"input-password\" \n        class=\"form-control form-control-lg first\" placeholder=\"New Password\" required\n             [required]=\"getConfigValue('email', 'validation.password.required')\"\n             [minlength]=\"getConfigValue('email', 'validation.password.minLength')\"\n             [maxlength]=\"getConfigValue('email', 'validation.password.maxLength')\"\n             autofocus>\n      \n      <label for=\"input-re-password\" class=\"sr-only\">Confirm Password</label>\n      <input name=\"confirmPassword\" [(ngModel)]=\"user.confirmPassword\" type=\"password\" id=\"input-re-password\" \n        class=\"form-control form-control-lg last\" placeholder=\"Confirm Password\"\n             [required]=\"getConfigValue('email', 'validation.password.required')\"\n             [minlength]=\"getConfigValue('email', 'validation.password.minLength')\"\n             [maxlength]=\"getConfigValue('email', 'validation.password.maxLength')\">\n      \n      <div class=\"checkbox\"></div>\n      \n      <button [disabled]=\"submitted || !resetPassForm.form.valid\"\n        class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Change password</button>\n    </form>\n    \n    <div class=\"links\">\n      <a routerLink=\"../login\">Login</a> or <a routerLink=\"../register\">Register</a>\n    </div>\n  `,\n}"
              }
            }
          ],
          "children": [
            {
              "id": 1146,
              "name": "constructor",
              "kind": 512,
              "kindString": "Constructor",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 1149,
                  "name": "new NgaResetPasswordComponent",
                  "kind": 16384,
                  "kindString": "Constructor signature",
                  "flags": {},
                  "parameters": [
                    {
                      "id": 1150,
                      "name": "service",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {},
                      "type": {
                        "type": "reference",
                        "name": "NgaAuthService",
                        "id": 746
                      }
                    },
                    {
                      "id": 1151,
                      "name": "router",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {},
                      "type": {
                        "type": "reference",
                        "name": "Router"
                      }
                    }
                  ],
                  "type": {
                    "type": "reference",
                    "name": "NgaResetPasswordComponent",
                    "id": 1140
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/auth/components/reset-password/reset-password.component.ts",
                  "line": 60,
                  "character": 32
                }
              ]
            },
            {
              "id": 1143,
              "name": "errors",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isExported": true
              },
              "sources": [
                {
                  "fileName": "src/framework/auth/components/reset-password/reset-password.component.ts",
                  "line": 58,
                  "character": 8
                }
              ],
              "type": {
                "type": "instrinct",
                "isArray": true,
                "name": "string"
              },
              "defaultValue": " []"
            },
            {
              "id": 1144,
              "name": "messages",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isExported": true
              },
              "sources": [
                {
                  "fileName": "src/framework/auth/components/reset-password/reset-password.component.ts",
                  "line": 59,
                  "character": 10
                }
              ],
              "type": {
                "type": "instrinct",
                "isArray": true,
                "name": "string"
              },
              "defaultValue": " []"
            },
            {
              "id": 1141,
              "name": "redirectDelay",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isExported": true
              },
              "sources": [
                {
                  "fileName": "src/framework/auth/components/reset-password/reset-password.component.ts",
                  "line": 56,
                  "character": 15
                }
              ],
              "type": {
                "type": "instrinct",
                "name": "number"
              },
              "defaultValue": "1500"
            },
            {
              "id": 1148,
              "name": "router",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isConstructorProperty": true,
                "isExported": true,
                "isProtected": true
              },
              "sources": [
                {
                  "fileName": "src/framework/auth/components/reset-password/reset-password.component.ts",
                  "line": 63,
                  "character": 30
                }
              ],
              "type": {
                "type": "reference",
                "name": "Router"
              }
            },
            {
              "id": 1147,
              "name": "service",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isConstructorProperty": true,
                "isExported": true,
                "isProtected": true
              },
              "sources": [
                {
                  "fileName": "src/framework/auth/components/reset-password/reset-password.component.ts",
                  "line": 62,
                  "character": 31
                }
              ],
              "type": {
                "type": "reference",
                "name": "NgaAuthService",
                "id": 746
              }
            },
            {
              "id": 1142,
              "name": "submitted",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isExported": true
              },
              "sources": [
                {
                  "fileName": "src/framework/auth/components/reset-password/reset-password.component.ts",
                  "line": 57,
                  "character": 11
                }
              ],
              "type": {
                "type": "instrinct",
                "name": "boolean"
              },
              "defaultValue": "false"
            },
            {
              "id": 1145,
              "name": "user",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isExported": true
              },
              "sources": [
                {
                  "fileName": "src/framework/auth/components/reset-password/reset-password.component.ts",
                  "line": 60,
                  "character": 6
                }
              ],
              "type": {
                "type": "reference",
                "name": "NgaUser",
                "id": 1046
              },
              "defaultValue": " new NgaUser()"
            },
            {
              "id": 1155,
              "name": "getConfigValue",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 1156,
                  "name": "getConfigValue",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "parameters": [
                    {
                      "id": 1157,
                      "name": "provider",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {},
                      "type": {
                        "type": "instrinct",
                        "name": "string"
                      }
                    },
                    {
                      "id": 1158,
                      "name": "key",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {},
                      "type": {
                        "type": "instrinct",
                        "name": "string"
                      }
                    }
                  ],
                  "type": {
                    "type": "instrinct",
                    "name": "any"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/auth/components/reset-password/reset-password.component.ts",
                  "line": 87,
                  "character": 16
                }
              ]
            },
            {
              "id": 1152,
              "name": "resetPass",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 1153,
                  "name": "resetPass",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "parameters": [
                    {
                      "id": 1154,
                      "name": "provider",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {},
                      "type": {
                        "type": "instrinct",
                        "name": "string"
                      }
                    }
                  ],
                  "type": {
                    "type": "instrinct",
                    "name": "void"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/auth/components/reset-password/reset-password.component.ts",
                  "line": 66,
                  "character": 11
                }
              ]
            }
          ],
          "groups": [
            {
              "title": "Constructors",
              "kind": 512,
              "children": [
                1146
              ]
            },
            {
              "title": "Properties",
              "kind": 1024,
              "children": [
                1143,
                1144,
                1141,
                1148,
                1147,
                1142,
                1145
              ]
            },
            {
              "title": "Methods",
              "kind": 2048,
              "children": [
                1155,
                1152
              ]
            }
          ],
          "sources": [
            {
              "fileName": "src/framework/auth/components/reset-password/reset-password.component.ts",
              "line": 54,
              "character": 38
            }
          ]
        }
      ],
      "groups": [
        {
          "title": "Classes",
          "kind": 128,
          "children": [
            1140
          ]
        }
      ],
      "sources": [
        {
          "fileName": "src/framework/auth/components/reset-password/reset-password.component.ts",
          "line": 1,
          "character": 0
        }
      ]
    },
    {
      "id": 627,
      "name": "\"src/framework/auth/helpers\"",
      "kind": 1,
      "kindString": "External module",
      "flags": {
        "isExported": true
      },
      "originalName": "/Users/nixa/Development/Projects/Akveo/ng2-admin/src/framework/auth/helpers.ts",
      "children": [
        {
          "id": 634,
          "name": "cloneSpecificValue",
          "kind": 64,
          "kindString": "Function",
          "flags": {},
          "signatures": [
            {
              "id": 635,
              "name": "cloneSpecificValue",
              "kind": 4096,
              "kindString": "Call signature",
              "flags": {},
              "parameters": [
                {
                  "id": 636,
                  "name": "val",
                  "kind": 32768,
                  "kindString": "Parameter",
                  "flags": {},
                  "type": {
                    "type": "instrinct",
                    "name": "any"
                  }
                }
              ],
              "type": {
                "type": "instrinct",
                "name": "any"
              }
            }
          ],
          "sources": [
            {
              "fileName": "src/framework/auth/helpers.ts",
              "line": 81,
              "character": 27
            }
          ]
        },
        {
          "id": 637,
          "name": "deepCloneArray",
          "kind": 64,
          "kindString": "Function",
          "flags": {},
          "signatures": [
            {
              "id": 638,
              "name": "deepCloneArray",
              "kind": 4096,
              "kindString": "Call signature",
              "flags": {},
              "comment": {
                "shortText": "Recursive cloning array."
              },
              "parameters": [
                {
                  "id": 639,
                  "name": "arr",
                  "kind": 32768,
                  "kindString": "Parameter",
                  "flags": {},
                  "type": {
                    "type": "instrinct",
                    "isArray": true,
                    "name": "any"
                  }
                }
              ],
              "type": {
                "type": "instrinct",
                "name": "any"
              }
            }
          ],
          "sources": [
            {
              "fileName": "src/framework/auth/helpers.ts",
              "line": 94,
              "character": 23
            }
          ]
        },
        {
          "id": 628,
          "name": "deepExtend",
          "kind": 64,
          "kindString": "Function",
          "flags": {
            "isExported": true
          },
          "comment": {
            "shortText": "Extending object that entered in first argument.",
            "text": "Returns extended object or false if have no target object or incorrect type.\n\nIf you wish to clone source object (without modify it), just use empty new\nobject as first argument, like this:\n  deepExtend({}, yourObj_1, [yourObj_N]);\n"
          },
          "signatures": [
            {
              "id": 629,
              "name": "deepExtend",
              "kind": 4096,
              "kindString": "Call signature",
              "flags": {},
              "comment": {
                "shortText": "Extending object that entered in first argument.",
                "text": "Returns extended object or false if have no target object or incorrect type.\n\nIf you wish to clone source object (without modify it), just use empty new\nobject as first argument, like this:\n  deepExtend({}, yourObj_1, [yourObj_N]);\n"
              },
              "parameters": [
                {
                  "id": 630,
                  "name": "objects",
                  "kind": 32768,
                  "kindString": "Parameter",
                  "flags": {
                    "isRest": true
                  },
                  "type": {
                    "type": "instrinct",
                    "isArray": true,
                    "name": "any"
                  }
                }
              ],
              "type": {
                "type": "instrinct",
                "name": "any"
              }
            }
          ],
          "sources": [
            {
              "fileName": "src/framework/auth/helpers.ts",
              "line": 10,
              "character": 23
            }
          ]
        },
        {
          "id": 640,
          "name": "getDeepFromObject",
          "kind": 64,
          "kindString": "Function",
          "flags": {
            "isExported": true
          },
          "signatures": [
            {
              "id": 641,
              "name": "getDeepFromObject",
              "kind": 4096,
              "kindString": "Call signature",
              "flags": {},
              "parameters": [
                {
                  "id": 642,
                  "name": "object",
                  "kind": 32768,
                  "kindString": "Parameter",
                  "flags": {},
                  "type": {
                    "type": "reflection",
                    "declaration": {
                      "id": 643,
                      "name": "__type",
                      "kind": 65536,
                      "kindString": "Type literal",
                      "flags": {}
                    }
                  },
                  "defaultValue": " {}"
                },
                {
                  "id": 644,
                  "name": "name",
                  "kind": 32768,
                  "kindString": "Parameter",
                  "flags": {},
                  "type": {
                    "type": "instrinct",
                    "name": "string"
                  }
                },
                {
                  "id": 645,
                  "name": "defaultValue",
                  "kind": 32768,
                  "kindString": "Parameter",
                  "flags": {
                    "isOptional": true
                  },
                  "type": {
                    "type": "instrinct",
                    "name": "any"
                  }
                }
              ],
              "type": {
                "type": "instrinct",
                "name": "any"
              }
            }
          ],
          "sources": [
            {
              "fileName": "src/framework/auth/helpers.ts",
              "line": 113,
              "character": 33
            }
          ]
        },
        {
          "id": 631,
          "name": "isSpecificValue",
          "kind": 64,
          "kindString": "Function",
          "flags": {},
          "signatures": [
            {
              "id": 632,
              "name": "isSpecificValue",
              "kind": 4096,
              "kindString": "Call signature",
              "flags": {},
              "parameters": [
                {
                  "id": 633,
                  "name": "val",
                  "kind": 32768,
                  "kindString": "Parameter",
                  "flags": {},
                  "type": {
                    "type": "instrinct",
                    "name": "any"
                  }
                }
              ],
              "type": {
                "type": "instrinct",
                "name": "boolean"
              }
            }
          ],
          "sources": [
            {
              "fileName": "src/framework/auth/helpers.ts",
              "line": 74,
              "character": 24
            }
          ]
        }
      ],
      "groups": [
        {
          "title": "Functions",
          "kind": 64,
          "children": [
            634,
            637,
            628,
            640,
            631
          ]
        }
      ],
      "sources": [
        {
          "fileName": "src/framework/auth/helpers.ts",
          "line": 1,
          "character": 0
        }
      ]
    },
    {
      "id": 1174,
      "name": "\"src/framework/auth/index\"",
      "kind": 1,
      "kindString": "External module",
      "flags": {
        "isExported": true
      },
      "originalName": "/Users/nixa/Development/Projects/Akveo/ng2-admin/src/framework/auth/index.ts",
      "sources": [
        {
          "fileName": "src/framework/auth/index.ts",
          "line": 1,
          "character": 0
        }
      ]
    },
    {
      "id": 1045,
      "name": "\"src/framework/auth/models/user\"",
      "kind": 1,
      "kindString": "External module",
      "flags": {
        "isExported": true
      },
      "originalName": "/Users/nixa/Development/Projects/Akveo/ng2-admin/src/framework/auth/models/user.ts",
      "children": [
        {
          "id": 1046,
          "name": "NgaUser",
          "kind": 128,
          "kindString": "Class",
          "flags": {
            "isExported": true
          },
          "children": [
            {
              "id": 1047,
              "name": "constructor",
              "kind": 512,
              "kindString": "Constructor",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 1055,
                  "name": "new NgaUser",
                  "kind": 16384,
                  "kindString": "Constructor signature",
                  "flags": {},
                  "parameters": [
                    {
                      "id": 1056,
                      "name": "id",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {
                        "isOptional": true
                      },
                      "type": {
                        "type": "instrinct",
                        "name": "number"
                      }
                    },
                    {
                      "id": 1057,
                      "name": "email",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {
                        "isOptional": true
                      },
                      "type": {
                        "type": "instrinct",
                        "name": "string"
                      }
                    },
                    {
                      "id": 1058,
                      "name": "password",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {
                        "isOptional": true
                      },
                      "type": {
                        "type": "instrinct",
                        "name": "string"
                      }
                    },
                    {
                      "id": 1059,
                      "name": "rememberMe",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {
                        "isOptional": true
                      },
                      "type": {
                        "type": "instrinct",
                        "name": "boolean"
                      }
                    },
                    {
                      "id": 1060,
                      "name": "terms",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {
                        "isOptional": true
                      },
                      "type": {
                        "type": "instrinct",
                        "name": "boolean"
                      }
                    },
                    {
                      "id": 1061,
                      "name": "confirmPassword",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {
                        "isOptional": true
                      },
                      "type": {
                        "type": "instrinct",
                        "name": "string"
                      }
                    },
                    {
                      "id": 1062,
                      "name": "fullName",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {
                        "isOptional": true
                      },
                      "type": {
                        "type": "instrinct",
                        "name": "string"
                      }
                    }
                  ],
                  "type": {
                    "type": "reference",
                    "name": "NgaUser",
                    "id": 1046
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/auth/models/user.ts",
                  "line": 1,
                  "character": 22
                }
              ]
            },
            {
              "id": 1053,
              "name": "confirmPassword",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isConstructorProperty": true,
                "isExported": true,
                "isPublic": true,
                "isOptional": true
              },
              "sources": [
                {
                  "fileName": "src/framework/auth/models/user.ts",
                  "line": 8,
                  "character": 36
                }
              ],
              "type": {
                "type": "instrinct",
                "name": "string"
              }
            },
            {
              "id": 1049,
              "name": "email",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isConstructorProperty": true,
                "isExported": true,
                "isPublic": true,
                "isOptional": true
              },
              "sources": [
                {
                  "fileName": "src/framework/auth/models/user.ts",
                  "line": 4,
                  "character": 26
                }
              ],
              "type": {
                "type": "instrinct",
                "name": "string"
              }
            },
            {
              "id": 1054,
              "name": "fullName",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isConstructorProperty": true,
                "isExported": true,
                "isPublic": true,
                "isOptional": true
              },
              "sources": [
                {
                  "fileName": "src/framework/auth/models/user.ts",
                  "line": 9,
                  "character": 29
                }
              ],
              "type": {
                "type": "instrinct",
                "name": "string"
              }
            },
            {
              "id": 1048,
              "name": "id",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isConstructorProperty": true,
                "isExported": true,
                "isPublic": true,
                "isOptional": true
              },
              "sources": [
                {
                  "fileName": "src/framework/auth/models/user.ts",
                  "line": 3,
                  "character": 23
                }
              ],
              "type": {
                "type": "instrinct",
                "name": "number"
              }
            },
            {
              "id": 1050,
              "name": "password",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isConstructorProperty": true,
                "isExported": true,
                "isPublic": true,
                "isOptional": true
              },
              "sources": [
                {
                  "fileName": "src/framework/auth/models/user.ts",
                  "line": 5,
                  "character": 29
                }
              ],
              "type": {
                "type": "instrinct",
                "name": "string"
              }
            },
            {
              "id": 1051,
              "name": "rememberMe",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isConstructorProperty": true,
                "isExported": true,
                "isPublic": true,
                "isOptional": true
              },
              "sources": [
                {
                  "fileName": "src/framework/auth/models/user.ts",
                  "line": 6,
                  "character": 31
                }
              ],
              "type": {
                "type": "instrinct",
                "name": "boolean"
              }
            },
            {
              "id": 1052,
              "name": "terms",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isConstructorProperty": true,
                "isExported": true,
                "isPublic": true,
                "isOptional": true
              },
              "sources": [
                {
                  "fileName": "src/framework/auth/models/user.ts",
                  "line": 7,
                  "character": 26
                }
              ],
              "type": {
                "type": "instrinct",
                "name": "boolean"
              }
            }
          ],
          "groups": [
            {
              "title": "Constructors",
              "kind": 512,
              "children": [
                1047
              ]
            },
            {
              "title": "Properties",
              "kind": 1024,
              "children": [
                1053,
                1049,
                1054,
                1048,
                1050,
                1051,
                1052
              ]
            }
          ],
          "sources": [
            {
              "fileName": "src/framework/auth/models/user.ts",
              "line": 1,
              "character": 20
            }
          ]
        }
      ],
      "groups": [
        {
          "title": "Classes",
          "kind": 128,
          "children": [
            1046
          ]
        }
      ],
      "sources": [
        {
          "fileName": "src/framework/auth/models/user.ts",
          "line": 1,
          "character": 0
        }
      ]
    },
    {
      "id": 646,
      "name": "\"src/framework/auth/providers/abstract-auth.provider\"",
      "kind": 1,
      "kindString": "External module",
      "flags": {
        "isExported": true
      },
      "originalName": "/Users/nixa/Development/Projects/Akveo/ng2-admin/src/framework/auth/providers/abstract-auth.provider.ts",
      "children": [
        {
          "id": 647,
          "name": "NgaAbstractAuthProvider",
          "kind": 128,
          "kindString": "Class",
          "flags": {
            "isExported": true
          },
          "children": [
            {
              "id": 649,
              "name": "config",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isExported": true,
                "isProtected": true
              },
              "sources": [
                {
                  "fileName": "src/framework/auth/providers/abstract-auth.provider.ts",
                  "line": 10,
                  "character": 18
                }
              ],
              "type": {
                "type": "instrinct",
                "name": "any"
              }
            },
            {
              "id": 648,
              "name": "defaultConfig",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isExported": true,
                "isProtected": true
              },
              "sources": [
                {
                  "fileName": "src/framework/auth/providers/abstract-auth.provider.ts",
                  "line": 9,
                  "character": 25
                }
              ],
              "type": {
                "type": "instrinct",
                "name": "any"
              }
            },
            {
              "id": 656,
              "name": "authenticate",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 657,
                  "name": "authenticate",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "parameters": [
                    {
                      "id": 658,
                      "name": "data",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {
                        "isOptional": true
                      },
                      "type": {
                        "type": "instrinct",
                        "name": "any"
                      }
                    }
                  ],
                  "type": {
                    "type": "reference",
                    "name": "Observable",
                    "typeArguments": [
                      {
                        "type": "reference",
                        "name": "NgaAuthResult",
                        "id": 717
                      }
                    ]
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/auth/providers/abstract-auth.provider.ts",
                  "line": 20,
                  "character": 23
                }
              ]
            },
            {
              "id": 670,
              "name": "createFailResponse",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isExported": true,
                "isProtected": true
              },
              "signatures": [
                {
                  "id": 671,
                  "name": "createFailResponse",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "parameters": [
                    {
                      "id": 672,
                      "name": "data",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {
                        "isOptional": true
                      },
                      "type": {
                        "type": "instrinct",
                        "name": "any"
                      }
                    }
                  ],
                  "type": {
                    "type": "reference",
                    "name": "Response"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/auth/providers/abstract-auth.provider.ts",
                  "line": 30,
                  "character": 30
                }
              ]
            },
            {
              "id": 673,
              "name": "createSuccessResponse",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isExported": true,
                "isProtected": true
              },
              "signatures": [
                {
                  "id": 674,
                  "name": "createSuccessResponse",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "parameters": [
                    {
                      "id": 675,
                      "name": "data",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {
                        "isOptional": true
                      },
                      "type": {
                        "type": "instrinct",
                        "name": "any"
                      }
                    }
                  ],
                  "type": {
                    "type": "reference",
                    "name": "Response"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/auth/providers/abstract-auth.provider.ts",
                  "line": 34,
                  "character": 33
                }
              ]
            },
            {
              "id": 653,
              "name": "getConfigValue",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 654,
                  "name": "getConfigValue",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "parameters": [
                    {
                      "id": 655,
                      "name": "key",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {},
                      "type": {
                        "type": "instrinct",
                        "name": "string"
                      }
                    }
                  ],
                  "type": {
                    "type": "instrinct",
                    "name": "any"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/auth/providers/abstract-auth.provider.ts",
                  "line": 16,
                  "character": 16
                }
              ]
            },
            {
              "id": 676,
              "name": "getJsonSafe",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isExported": true,
                "isProtected": true
              },
              "signatures": [
                {
                  "id": 677,
                  "name": "getJsonSafe",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "parameters": [
                    {
                      "id": 678,
                      "name": "res",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {},
                      "type": {
                        "type": "reference",
                        "name": "Response"
                      }
                    }
                  ],
                  "type": {
                    "type": "instrinct",
                    "name": "any"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/auth/providers/abstract-auth.provider.ts",
                  "line": 38,
                  "character": 23
                }
              ]
            },
            {
              "id": 668,
              "name": "logout",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 669,
                  "name": "logout",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "type": {
                    "type": "reference",
                    "name": "Observable",
                    "typeArguments": [
                      {
                        "type": "reference",
                        "name": "NgaAuthResult",
                        "id": 717
                      }
                    ]
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/auth/providers/abstract-auth.provider.ts",
                  "line": 28,
                  "character": 17
                }
              ]
            },
            {
              "id": 659,
              "name": "register",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 660,
                  "name": "register",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "parameters": [
                    {
                      "id": 661,
                      "name": "data",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {
                        "isOptional": true
                      },
                      "type": {
                        "type": "instrinct",
                        "name": "any"
                      }
                    }
                  ],
                  "type": {
                    "type": "reference",
                    "name": "Observable",
                    "typeArguments": [
                      {
                        "type": "reference",
                        "name": "NgaAuthResult",
                        "id": 717
                      }
                    ]
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/auth/providers/abstract-auth.provider.ts",
                  "line": 22,
                  "character": 19
                }
              ]
            },
            {
              "id": 662,
              "name": "requestPassword",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 663,
                  "name": "requestPassword",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "parameters": [
                    {
                      "id": 664,
                      "name": "data",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {
                        "isOptional": true
                      },
                      "type": {
                        "type": "instrinct",
                        "name": "any"
                      }
                    }
                  ],
                  "type": {
                    "type": "reference",
                    "name": "Observable",
                    "typeArguments": [
                      {
                        "type": "reference",
                        "name": "NgaAuthResult",
                        "id": 717
                      }
                    ]
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/auth/providers/abstract-auth.provider.ts",
                  "line": 24,
                  "character": 26
                }
              ]
            },
            {
              "id": 665,
              "name": "resetPassword",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 666,
                  "name": "resetPassword",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "parameters": [
                    {
                      "id": 667,
                      "name": "data",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {
                        "isOptional": true
                      },
                      "type": {
                        "type": "instrinct",
                        "name": "any"
                      }
                    }
                  ],
                  "type": {
                    "type": "reference",
                    "name": "Observable",
                    "typeArguments": [
                      {
                        "type": "reference",
                        "name": "NgaAuthResult",
                        "id": 717
                      }
                    ]
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/auth/providers/abstract-auth.provider.ts",
                  "line": 26,
                  "character": 24
                }
              ]
            },
            {
              "id": 650,
              "name": "setConfig",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 651,
                  "name": "setConfig",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "parameters": [
                    {
                      "id": 652,
                      "name": "config",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {},
                      "type": {
                        "type": "instrinct",
                        "name": "any"
                      }
                    }
                  ],
                  "type": {
                    "type": "instrinct",
                    "name": "void"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/auth/providers/abstract-auth.provider.ts",
                  "line": 12,
                  "character": 11
                }
              ]
            }
          ],
          "groups": [
            {
              "title": "Properties",
              "kind": 1024,
              "children": [
                649,
                648
              ]
            },
            {
              "title": "Methods",
              "kind": 2048,
              "children": [
                656,
                670,
                673,
                653,
                676,
                668,
                659,
                662,
                665,
                650
              ]
            }
          ],
          "sources": [
            {
              "fileName": "src/framework/auth/providers/abstract-auth.provider.ts",
              "line": 7,
              "character": 45
            }
          ],
          "extendedBy": [
            {
              "type": "reference",
              "name": "NgaDummyAuthProvider",
              "id": 787
            },
            {
              "type": "reference",
              "name": "NgaEmailPassAuthProvider",
              "id": 883
            }
          ]
        }
      ],
      "groups": [
        {
          "title": "Classes",
          "kind": 128,
          "children": [
            647
          ]
        }
      ],
      "sources": [
        {
          "fileName": "src/framework/auth/providers/abstract-auth.provider.ts",
          "line": 1,
          "character": 0
        }
      ]
    },
    {
      "id": 783,
      "name": "\"src/framework/auth/providers/dummy-auth.provider\"",
      "kind": 1,
      "kindString": "External module",
      "flags": {
        "isExported": true
      },
      "originalName": "/Users/nixa/Development/Projects/Akveo/ng2-admin/src/framework/auth/providers/dummy-auth.provider.ts",
      "children": [
        {
          "id": 787,
          "name": "NgaDummyAuthProvider",
          "kind": 128,
          "kindString": "Class",
          "flags": {
            "isExported": true
          },
          "decorators": [
            {
              "name": "Injectable",
              "type": {
                "type": "reference",
                "name": "Injectable"
              },
              "arguments": {}
            }
          ],
          "children": [
            {
              "id": 808,
              "name": "config",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isExported": true,
                "isProtected": true
              },
              "sources": [
                {
                  "fileName": "src/framework/auth/providers/abstract-auth.provider.ts",
                  "line": 10,
                  "character": 18
                }
              ],
              "type": {
                "type": "instrinct",
                "name": "any"
              },
              "inheritedFrom": {
                "type": "reference",
                "name": "NgaAbstractAuthProvider.config",
                "id": 649
              }
            },
            {
              "id": 790,
              "name": "authenticate",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 791,
                  "name": "authenticate",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "parameters": [
                    {
                      "id": 792,
                      "name": "data",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {
                        "isOptional": true
                      },
                      "type": {
                        "type": "instrinct",
                        "name": "any"
                      }
                    }
                  ],
                  "type": {
                    "type": "reference",
                    "name": "Observable",
                    "typeArguments": [
                      {
                        "type": "reference",
                        "name": "NgaAuthResult",
                        "id": 717
                      }
                    ]
                  },
                  "overwrites": {
                    "type": "reference",
                    "name": "NgaAbstractAuthProvider.authenticate",
                    "id": 656
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/auth/providers/dummy-auth.provider.ts",
                  "line": 20,
                  "character": 14
                }
              ],
              "overwrites": {
                "type": "reference",
                "name": "NgaAbstractAuthProvider.authenticate",
                "id": 656
              }
            },
            {
              "id": 805,
              "name": "createDummyResult",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isExported": true,
                "isProtected": true
              },
              "signatures": [
                {
                  "id": 806,
                  "name": "createDummyResult",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "parameters": [
                    {
                      "id": 807,
                      "name": "data",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {
                        "isOptional": true
                      },
                      "type": {
                        "type": "instrinct",
                        "name": "any"
                      }
                    }
                  ],
                  "type": {
                    "type": "reference",
                    "name": "NgaAuthResult",
                    "id": 717
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/auth/providers/dummy-auth.provider.ts",
                  "line": 45,
                  "character": 29
                }
              ]
            },
            {
              "id": 815,
              "name": "createFailResponse",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isExported": true,
                "isProtected": true
              },
              "signatures": [
                {
                  "id": 816,
                  "name": "createFailResponse",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "parameters": [
                    {
                      "id": 817,
                      "name": "data",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {
                        "isOptional": true
                      },
                      "type": {
                        "type": "instrinct",
                        "name": "any"
                      }
                    }
                  ],
                  "type": {
                    "type": "reference",
                    "name": "Response"
                  },
                  "inheritedFrom": {
                    "type": "reference",
                    "name": "NgaAbstractAuthProvider.createFailResponse",
                    "id": 670
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/auth/providers/abstract-auth.provider.ts",
                  "line": 30,
                  "character": 30
                }
              ],
              "inheritedFrom": {
                "type": "reference",
                "name": "NgaAbstractAuthProvider.createFailResponse",
                "id": 670
              }
            },
            {
              "id": 818,
              "name": "createSuccessResponse",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isExported": true,
                "isProtected": true
              },
              "signatures": [
                {
                  "id": 819,
                  "name": "createSuccessResponse",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "parameters": [
                    {
                      "id": 820,
                      "name": "data",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {
                        "isOptional": true
                      },
                      "type": {
                        "type": "instrinct",
                        "name": "any"
                      }
                    }
                  ],
                  "type": {
                    "type": "reference",
                    "name": "Response"
                  },
                  "inheritedFrom": {
                    "type": "reference",
                    "name": "NgaAbstractAuthProvider.createSuccessResponse",
                    "id": 673
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/auth/providers/abstract-auth.provider.ts",
                  "line": 34,
                  "character": 33
                }
              ],
              "inheritedFrom": {
                "type": "reference",
                "name": "NgaAbstractAuthProvider.createSuccessResponse",
                "id": 673
              }
            },
            {
              "id": 812,
              "name": "getConfigValue",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 813,
                  "name": "getConfigValue",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "parameters": [
                    {
                      "id": 814,
                      "name": "key",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {},
                      "type": {
                        "type": "instrinct",
                        "name": "string"
                      }
                    }
                  ],
                  "type": {
                    "type": "instrinct",
                    "name": "any"
                  },
                  "inheritedFrom": {
                    "type": "reference",
                    "name": "NgaAbstractAuthProvider.getConfigValue",
                    "id": 653
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/auth/providers/abstract-auth.provider.ts",
                  "line": 16,
                  "character": 16
                }
              ],
              "inheritedFrom": {
                "type": "reference",
                "name": "NgaAbstractAuthProvider.getConfigValue",
                "id": 653
              }
            },
            {
              "id": 821,
              "name": "getJsonSafe",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isExported": true,
                "isProtected": true
              },
              "signatures": [
                {
                  "id": 822,
                  "name": "getJsonSafe",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "parameters": [
                    {
                      "id": 823,
                      "name": "res",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {},
                      "type": {
                        "type": "reference",
                        "name": "Response"
                      }
                    }
                  ],
                  "type": {
                    "type": "instrinct",
                    "name": "any"
                  },
                  "inheritedFrom": {
                    "type": "reference",
                    "name": "NgaAbstractAuthProvider.getJsonSafe",
                    "id": 676
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/auth/providers/abstract-auth.provider.ts",
                  "line": 38,
                  "character": 23
                }
              ],
              "inheritedFrom": {
                "type": "reference",
                "name": "NgaAbstractAuthProvider.getJsonSafe",
                "id": 676
              }
            },
            {
              "id": 802,
              "name": "logout",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 803,
                  "name": "logout",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "parameters": [
                    {
                      "id": 804,
                      "name": "data",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {
                        "isOptional": true
                      },
                      "type": {
                        "type": "instrinct",
                        "name": "any"
                      }
                    }
                  ],
                  "type": {
                    "type": "reference",
                    "name": "Observable",
                    "typeArguments": [
                      {
                        "type": "reference",
                        "name": "NgaAuthResult",
                        "id": 717
                      }
                    ]
                  },
                  "overwrites": {
                    "type": "reference",
                    "name": "NgaAbstractAuthProvider.logout",
                    "id": 668
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/auth/providers/dummy-auth.provider.ts",
                  "line": 40,
                  "character": 8
                }
              ],
              "overwrites": {
                "type": "reference",
                "name": "NgaAbstractAuthProvider.logout",
                "id": 668
              }
            },
            {
              "id": 793,
              "name": "register",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 794,
                  "name": "register",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "parameters": [
                    {
                      "id": 795,
                      "name": "data",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {
                        "isOptional": true
                      },
                      "type": {
                        "type": "instrinct",
                        "name": "any"
                      }
                    }
                  ],
                  "type": {
                    "type": "reference",
                    "name": "Observable",
                    "typeArguments": [
                      {
                        "type": "reference",
                        "name": "NgaAuthResult",
                        "id": 717
                      }
                    ]
                  },
                  "overwrites": {
                    "type": "reference",
                    "name": "NgaAbstractAuthProvider.register",
                    "id": 659
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/auth/providers/dummy-auth.provider.ts",
                  "line": 25,
                  "character": 10
                }
              ],
              "overwrites": {
                "type": "reference",
                "name": "NgaAbstractAuthProvider.register",
                "id": 659
              }
            },
            {
              "id": 796,
              "name": "requestPassword",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 797,
                  "name": "requestPassword",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "parameters": [
                    {
                      "id": 798,
                      "name": "data",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {
                        "isOptional": true
                      },
                      "type": {
                        "type": "instrinct",
                        "name": "any"
                      }
                    }
                  ],
                  "type": {
                    "type": "reference",
                    "name": "Observable",
                    "typeArguments": [
                      {
                        "type": "reference",
                        "name": "NgaAuthResult",
                        "id": 717
                      }
                    ]
                  },
                  "overwrites": {
                    "type": "reference",
                    "name": "NgaAbstractAuthProvider.requestPassword",
                    "id": 662
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/auth/providers/dummy-auth.provider.ts",
                  "line": 30,
                  "character": 17
                }
              ],
              "overwrites": {
                "type": "reference",
                "name": "NgaAbstractAuthProvider.requestPassword",
                "id": 662
              }
            },
            {
              "id": 799,
              "name": "resetPassword",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 800,
                  "name": "resetPassword",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "parameters": [
                    {
                      "id": 801,
                      "name": "data",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {
                        "isOptional": true
                      },
                      "type": {
                        "type": "instrinct",
                        "name": "any"
                      }
                    }
                  ],
                  "type": {
                    "type": "reference",
                    "name": "Observable",
                    "typeArguments": [
                      {
                        "type": "reference",
                        "name": "NgaAuthResult",
                        "id": 717
                      }
                    ]
                  },
                  "overwrites": {
                    "type": "reference",
                    "name": "NgaAbstractAuthProvider.resetPassword",
                    "id": 665
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/auth/providers/dummy-auth.provider.ts",
                  "line": 35,
                  "character": 15
                }
              ],
              "overwrites": {
                "type": "reference",
                "name": "NgaAbstractAuthProvider.resetPassword",
                "id": 665
              }
            },
            {
              "id": 809,
              "name": "setConfig",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 810,
                  "name": "setConfig",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "parameters": [
                    {
                      "id": 811,
                      "name": "config",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {},
                      "type": {
                        "type": "instrinct",
                        "name": "any"
                      }
                    }
                  ],
                  "type": {
                    "type": "instrinct",
                    "name": "void"
                  },
                  "inheritedFrom": {
                    "type": "reference",
                    "name": "NgaAbstractAuthProvider.setConfig",
                    "id": 650
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/auth/providers/abstract-auth.provider.ts",
                  "line": 12,
                  "character": 11
                }
              ],
              "inheritedFrom": {
                "type": "reference",
                "name": "NgaAbstractAuthProvider.setConfig",
                "id": 650
              }
            },
            {
              "id": 788,
              "name": "defaultConfig",
              "kind": 2097152,
              "kindString": "Object literal",
              "flags": {
                "isExported": true,
                "isProtected": true
              },
              "children": [
                {
                  "id": 789,
                  "name": "delay",
                  "kind": 32,
                  "kindString": "Variable",
                  "flags": {
                    "isExported": true
                  },
                  "sources": [
                    {
                      "fileName": "src/framework/auth/providers/dummy-auth.provider.ts",
                      "line": 17,
                      "character": 9
                    }
                  ],
                  "type": {
                    "type": "instrinct",
                    "name": "number"
                  },
                  "defaultValue": "1000"
                }
              ],
              "groups": [
                {
                  "title": "Variables",
                  "kind": 32,
                  "children": [
                    789
                  ]
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/auth/providers/dummy-auth.provider.ts",
                  "line": 16,
                  "character": 25
                }
              ],
              "type": {
                "type": "instrinct",
                "name": "object"
              },
              "overwrites": {
                "type": "reference",
                "name": "NgaAbstractAuthProvider.defaultConfig",
                "id": 648
              }
            }
          ],
          "groups": [
            {
              "title": "Properties",
              "kind": 1024,
              "children": [
                808
              ]
            },
            {
              "title": "Methods",
              "kind": 2048,
              "children": [
                790,
                805,
                815,
                818,
                812,
                821,
                802,
                793,
                796,
                799,
                809
              ]
            },
            {
              "title": "Object literals",
              "kind": 2097152,
              "children": [
                788
              ]
            }
          ],
          "sources": [
            {
              "fileName": "src/framework/auth/providers/dummy-auth.provider.ts",
              "line": 14,
              "character": 33
            }
          ],
          "extendedTypes": [
            {
              "type": "reference",
              "name": "NgaAbstractAuthProvider",
              "id": 647
            }
          ]
        },
        {
          "id": 784,
          "name": "NgaDummyAuthProviderConfig",
          "kind": 256,
          "kindString": "Interface",
          "flags": {
            "isExported": true
          },
          "children": [
            {
              "id": 786,
              "name": "alwaysFail",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isExported": true,
                "isOptional": true
              },
              "sources": [
                {
                  "fileName": "src/framework/auth/providers/dummy-auth.provider.ts",
                  "line": 10,
                  "character": 12
                }
              ],
              "type": {
                "type": "instrinct",
                "name": "boolean"
              }
            },
            {
              "id": 785,
              "name": "delay",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isExported": true,
                "isOptional": true
              },
              "sources": [
                {
                  "fileName": "src/framework/auth/providers/dummy-auth.provider.ts",
                  "line": 9,
                  "character": 7
                }
              ],
              "type": {
                "type": "instrinct",
                "name": "number"
              }
            }
          ],
          "groups": [
            {
              "title": "Properties",
              "kind": 1024,
              "children": [
                786,
                785
              ]
            }
          ],
          "sources": [
            {
              "fileName": "src/framework/auth/providers/dummy-auth.provider.ts",
              "line": 8,
              "character": 43
            }
          ]
        }
      ],
      "groups": [
        {
          "title": "Classes",
          "kind": 128,
          "children": [
            787
          ]
        },
        {
          "title": "Interfaces",
          "kind": 256,
          "children": [
            784
          ]
        }
      ],
      "sources": [
        {
          "fileName": "src/framework/auth/providers/dummy-auth.provider.ts",
          "line": 1,
          "character": 0
        }
      ]
    },
    {
      "id": 824,
      "name": "\"src/framework/auth/providers/email-pass-auth.options\"",
      "kind": 1,
      "kindString": "External module",
      "flags": {
        "isExported": true
      },
      "originalName": "/Users/nixa/Development/Projects/Akveo/ng2-admin/src/framework/auth/providers/email-pass-auth.options.ts",
      "children": [
        {
          "id": 846,
          "name": "NgEmailPassAuthProviderConfig",
          "kind": 256,
          "kindString": "Interface",
          "flags": {
            "isExported": true
          },
          "children": [
            {
              "id": 856,
              "name": "errors",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isExported": true,
                "isOptional": true
              },
              "sources": [
                {
                  "fileName": "src/framework/auth/providers/email-pass-auth.options.ts",
                  "line": 32,
                  "character": 8
                }
              ],
              "type": {
                "type": "reflection",
                "declaration": {
                  "id": 857,
                  "name": "__type",
                  "kind": 65536,
                  "kindString": "Type literal",
                  "flags": {},
                  "children": [
                    {
                      "id": 859,
                      "name": "getter",
                      "kind": 32,
                      "kindString": "Variable",
                      "flags": {
                        "isOptional": true
                      },
                      "sources": [
                        {
                          "fileName": "src/framework/auth/providers/email-pass-auth.options.ts",
                          "line": 34,
                          "character": 10
                        }
                      ],
                      "type": {
                        "type": "reference",
                        "name": "Function"
                      }
                    },
                    {
                      "id": 858,
                      "name": "key",
                      "kind": 32,
                      "kindString": "Variable",
                      "flags": {
                        "isOptional": true
                      },
                      "sources": [
                        {
                          "fileName": "src/framework/auth/providers/email-pass-auth.options.ts",
                          "line": 33,
                          "character": 7
                        }
                      ],
                      "type": {
                        "type": "instrinct",
                        "name": "string"
                      }
                    }
                  ],
                  "groups": [
                    {
                      "title": "Variables",
                      "kind": 32,
                      "children": [
                        859,
                        858
                      ]
                    }
                  ],
                  "sources": [
                    {
                      "fileName": "src/framework/auth/providers/email-pass-auth.options.ts",
                      "line": 32,
                      "character": 10
                    }
                  ]
                }
              }
            },
            {
              "id": 847,
              "name": "login",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isExported": true,
                "isOptional": true
              },
              "sources": [
                {
                  "fileName": "src/framework/auth/providers/email-pass-auth.options.ts",
                  "line": 23,
                  "character": 7
                }
              ],
              "type": {
                "type": "union",
                "types": [
                  {
                    "type": "instrinct",
                    "name": "boolean"
                  },
                  {
                    "type": "reference",
                    "name": "NgaEmailPassModuleConfig",
                    "id": 825
                  }
                ]
              }
            },
            {
              "id": 851,
              "name": "logout",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isExported": true,
                "isOptional": true
              },
              "sources": [
                {
                  "fileName": "src/framework/auth/providers/email-pass-auth.options.ts",
                  "line": 27,
                  "character": 8
                }
              ],
              "type": {
                "type": "union",
                "types": [
                  {
                    "type": "instrinct",
                    "name": "boolean"
                  },
                  {
                    "type": "reference",
                    "name": "NgaEmailPassResetModuleConfig",
                    "id": 835
                  }
                ]
              }
            },
            {
              "id": 860,
              "name": "messages",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isExported": true,
                "isOptional": true
              },
              "sources": [
                {
                  "fileName": "src/framework/auth/providers/email-pass-auth.options.ts",
                  "line": 36,
                  "character": 10
                }
              ],
              "type": {
                "type": "reflection",
                "declaration": {
                  "id": 861,
                  "name": "__type",
                  "kind": 65536,
                  "kindString": "Type literal",
                  "flags": {},
                  "children": [
                    {
                      "id": 863,
                      "name": "getter",
                      "kind": 32,
                      "kindString": "Variable",
                      "flags": {
                        "isOptional": true
                      },
                      "sources": [
                        {
                          "fileName": "src/framework/auth/providers/email-pass-auth.options.ts",
                          "line": 38,
                          "character": 10
                        }
                      ],
                      "type": {
                        "type": "reference",
                        "name": "Function"
                      }
                    },
                    {
                      "id": 862,
                      "name": "key",
                      "kind": 32,
                      "kindString": "Variable",
                      "flags": {
                        "isOptional": true
                      },
                      "sources": [
                        {
                          "fileName": "src/framework/auth/providers/email-pass-auth.options.ts",
                          "line": 37,
                          "character": 7
                        }
                      ],
                      "type": {
                        "type": "instrinct",
                        "name": "string"
                      }
                    }
                  ],
                  "groups": [
                    {
                      "title": "Variables",
                      "kind": 32,
                      "children": [
                        863,
                        862
                      ]
                    }
                  ],
                  "sources": [
                    {
                      "fileName": "src/framework/auth/providers/email-pass-auth.options.ts",
                      "line": 36,
                      "character": 12
                    }
                  ]
                }
              }
            },
            {
              "id": 848,
              "name": "register",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isExported": true,
                "isOptional": true
              },
              "sources": [
                {
                  "fileName": "src/framework/auth/providers/email-pass-auth.options.ts",
                  "line": 24,
                  "character": 10
                }
              ],
              "type": {
                "type": "union",
                "types": [
                  {
                    "type": "instrinct",
                    "name": "boolean"
                  },
                  {
                    "type": "reference",
                    "name": "NgaEmailPassModuleConfig",
                    "id": 825
                  }
                ]
              }
            },
            {
              "id": 849,
              "name": "requestPass",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isExported": true,
                "isOptional": true
              },
              "sources": [
                {
                  "fileName": "src/framework/auth/providers/email-pass-auth.options.ts",
                  "line": 25,
                  "character": 13
                }
              ],
              "type": {
                "type": "union",
                "types": [
                  {
                    "type": "instrinct",
                    "name": "boolean"
                  },
                  {
                    "type": "reference",
                    "name": "NgaEmailPassModuleConfig",
                    "id": 825
                  }
                ]
              }
            },
            {
              "id": 850,
              "name": "resetPass",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isExported": true,
                "isOptional": true
              },
              "sources": [
                {
                  "fileName": "src/framework/auth/providers/email-pass-auth.options.ts",
                  "line": 26,
                  "character": 11
                }
              ],
              "type": {
                "type": "union",
                "types": [
                  {
                    "type": "instrinct",
                    "name": "boolean"
                  },
                  {
                    "type": "reference",
                    "name": "NgaEmailPassResetModuleConfig",
                    "id": 835
                  }
                ]
              }
            },
            {
              "id": 852,
              "name": "token",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isExported": true,
                "isOptional": true
              },
              "sources": [
                {
                  "fileName": "src/framework/auth/providers/email-pass-auth.options.ts",
                  "line": 28,
                  "character": 7
                }
              ],
              "type": {
                "type": "reflection",
                "declaration": {
                  "id": 853,
                  "name": "__type",
                  "kind": 65536,
                  "kindString": "Type literal",
                  "flags": {},
                  "children": [
                    {
                      "id": 855,
                      "name": "getter",
                      "kind": 32,
                      "kindString": "Variable",
                      "flags": {
                        "isOptional": true
                      },
                      "sources": [
                        {
                          "fileName": "src/framework/auth/providers/email-pass-auth.options.ts",
                          "line": 30,
                          "character": 10
                        }
                      ],
                      "type": {
                        "type": "reference",
                        "name": "Function"
                      }
                    },
                    {
                      "id": 854,
                      "name": "key",
                      "kind": 32,
                      "kindString": "Variable",
                      "flags": {
                        "isOptional": true
                      },
                      "sources": [
                        {
                          "fileName": "src/framework/auth/providers/email-pass-auth.options.ts",
                          "line": 29,
                          "character": 7
                        }
                      ],
                      "type": {
                        "type": "instrinct",
                        "name": "string"
                      }
                    }
                  ],
                  "groups": [
                    {
                      "title": "Variables",
                      "kind": 32,
                      "children": [
                        855,
                        854
                      ]
                    }
                  ],
                  "sources": [
                    {
                      "fileName": "src/framework/auth/providers/email-pass-auth.options.ts",
                      "line": 28,
                      "character": 9
                    }
                  ]
                }
              }
            },
            {
              "id": 864,
              "name": "validation",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isExported": true,
                "isOptional": true
              },
              "sources": [
                {
                  "fileName": "src/framework/auth/providers/email-pass-auth.options.ts",
                  "line": 40,
                  "character": 12
                }
              ],
              "type": {
                "type": "reflection",
                "declaration": {
                  "id": 865,
                  "name": "__type",
                  "kind": 65536,
                  "kindString": "Type literal",
                  "flags": {},
                  "children": [
                    {
                      "id": 872,
                      "name": "email",
                      "kind": 32,
                      "kindString": "Variable",
                      "flags": {
                        "isOptional": true
                      },
                      "sources": [
                        {
                          "fileName": "src/framework/auth/providers/email-pass-auth.options.ts",
                          "line": 47,
                          "character": 9
                        }
                      ],
                      "type": {
                        "type": "reflection",
                        "declaration": {
                          "id": 873,
                          "name": "__type",
                          "kind": 65536,
                          "kindString": "Type literal",
                          "flags": {},
                          "children": [
                            {
                              "id": 875,
                              "name": "regexp",
                              "kind": 32,
                              "kindString": "Variable",
                              "flags": {
                                "isOptional": true
                              },
                              "sources": [
                                {
                                  "fileName": "src/framework/auth/providers/email-pass-auth.options.ts",
                                  "line": 49,
                                  "character": 12
                                }
                              ],
                              "type": {
                                "type": "union",
                                "types": [
                                  {
                                    "type": "instrinct",
                                    "name": "string"
                                  },
                                  {
                                    "type": "instrinct",
                                    "name": "null"
                                  }
                                ]
                              }
                            },
                            {
                              "id": 874,
                              "name": "required",
                              "kind": 32,
                              "kindString": "Variable",
                              "flags": {
                                "isOptional": true
                              },
                              "sources": [
                                {
                                  "fileName": "src/framework/auth/providers/email-pass-auth.options.ts",
                                  "line": 48,
                                  "character": 14
                                }
                              ],
                              "type": {
                                "type": "instrinct",
                                "name": "boolean"
                              }
                            }
                          ],
                          "groups": [
                            {
                              "title": "Variables",
                              "kind": 32,
                              "children": [
                                875,
                                874
                              ]
                            }
                          ],
                          "sources": [
                            {
                              "fileName": "src/framework/auth/providers/email-pass-auth.options.ts",
                              "line": 47,
                              "character": 11
                            }
                          ]
                        }
                      }
                    },
                    {
                      "id": 876,
                      "name": "fullName",
                      "kind": 32,
                      "kindString": "Variable",
                      "flags": {
                        "isOptional": true
                      },
                      "sources": [
                        {
                          "fileName": "src/framework/auth/providers/email-pass-auth.options.ts",
                          "line": 51,
                          "character": 12
                        }
                      ],
                      "type": {
                        "type": "reflection",
                        "declaration": {
                          "id": 877,
                          "name": "__type",
                          "kind": 65536,
                          "kindString": "Type literal",
                          "flags": {},
                          "children": [
                            {
                              "id": 880,
                              "name": "maxLength",
                              "kind": 32,
                              "kindString": "Variable",
                              "flags": {
                                "isOptional": true
                              },
                              "sources": [
                                {
                                  "fileName": "src/framework/auth/providers/email-pass-auth.options.ts",
                                  "line": 54,
                                  "character": 15
                                }
                              ],
                              "type": {
                                "type": "union",
                                "types": [
                                  {
                                    "type": "instrinct",
                                    "name": "number"
                                  },
                                  {
                                    "type": "instrinct",
                                    "name": "null"
                                  }
                                ]
                              }
                            },
                            {
                              "id": 879,
                              "name": "minLength",
                              "kind": 32,
                              "kindString": "Variable",
                              "flags": {
                                "isOptional": true
                              },
                              "sources": [
                                {
                                  "fileName": "src/framework/auth/providers/email-pass-auth.options.ts",
                                  "line": 53,
                                  "character": 15
                                }
                              ],
                              "type": {
                                "type": "union",
                                "types": [
                                  {
                                    "type": "instrinct",
                                    "name": "number"
                                  },
                                  {
                                    "type": "instrinct",
                                    "name": "null"
                                  }
                                ]
                              }
                            },
                            {
                              "id": 881,
                              "name": "regexp",
                              "kind": 32,
                              "kindString": "Variable",
                              "flags": {
                                "isOptional": true
                              },
                              "sources": [
                                {
                                  "fileName": "src/framework/auth/providers/email-pass-auth.options.ts",
                                  "line": 55,
                                  "character": 12
                                }
                              ],
                              "type": {
                                "type": "union",
                                "types": [
                                  {
                                    "type": "instrinct",
                                    "name": "string"
                                  },
                                  {
                                    "type": "instrinct",
                                    "name": "null"
                                  }
                                ]
                              }
                            },
                            {
                              "id": 878,
                              "name": "required",
                              "kind": 32,
                              "kindString": "Variable",
                              "flags": {
                                "isOptional": true
                              },
                              "sources": [
                                {
                                  "fileName": "src/framework/auth/providers/email-pass-auth.options.ts",
                                  "line": 52,
                                  "character": 14
                                }
                              ],
                              "type": {
                                "type": "instrinct",
                                "name": "boolean"
                              }
                            }
                          ],
                          "groups": [
                            {
                              "title": "Variables",
                              "kind": 32,
                              "children": [
                                880,
                                879,
                                881,
                                878
                              ]
                            }
                          ],
                          "sources": [
                            {
                              "fileName": "src/framework/auth/providers/email-pass-auth.options.ts",
                              "line": 51,
                              "character": 14
                            }
                          ]
                        }
                      }
                    },
                    {
                      "id": 866,
                      "name": "password",
                      "kind": 32,
                      "kindString": "Variable",
                      "flags": {
                        "isOptional": true
                      },
                      "sources": [
                        {
                          "fileName": "src/framework/auth/providers/email-pass-auth.options.ts",
                          "line": 41,
                          "character": 12
                        }
                      ],
                      "type": {
                        "type": "reflection",
                        "declaration": {
                          "id": 867,
                          "name": "__type",
                          "kind": 65536,
                          "kindString": "Type literal",
                          "flags": {},
                          "children": [
                            {
                              "id": 870,
                              "name": "maxLength",
                              "kind": 32,
                              "kindString": "Variable",
                              "flags": {
                                "isOptional": true
                              },
                              "sources": [
                                {
                                  "fileName": "src/framework/auth/providers/email-pass-auth.options.ts",
                                  "line": 44,
                                  "character": 15
                                }
                              ],
                              "type": {
                                "type": "union",
                                "types": [
                                  {
                                    "type": "instrinct",
                                    "name": "number"
                                  },
                                  {
                                    "type": "instrinct",
                                    "name": "null"
                                  }
                                ]
                              }
                            },
                            {
                              "id": 869,
                              "name": "minLength",
                              "kind": 32,
                              "kindString": "Variable",
                              "flags": {
                                "isOptional": true
                              },
                              "sources": [
                                {
                                  "fileName": "src/framework/auth/providers/email-pass-auth.options.ts",
                                  "line": 43,
                                  "character": 15
                                }
                              ],
                              "type": {
                                "type": "union",
                                "types": [
                                  {
                                    "type": "instrinct",
                                    "name": "number"
                                  },
                                  {
                                    "type": "instrinct",
                                    "name": "null"
                                  }
                                ]
                              }
                            },
                            {
                              "id": 871,
                              "name": "regexp",
                              "kind": 32,
                              "kindString": "Variable",
                              "flags": {
                                "isOptional": true
                              },
                              "sources": [
                                {
                                  "fileName": "src/framework/auth/providers/email-pass-auth.options.ts",
                                  "line": 45,
                                  "character": 12
                                }
                              ],
                              "type": {
                                "type": "union",
                                "types": [
                                  {
                                    "type": "instrinct",
                                    "name": "string"
                                  },
                                  {
                                    "type": "instrinct",
                                    "name": "null"
                                  }
                                ]
                              }
                            },
                            {
                              "id": 868,
                              "name": "required",
                              "kind": 32,
                              "kindString": "Variable",
                              "flags": {
                                "isOptional": true
                              },
                              "sources": [
                                {
                                  "fileName": "src/framework/auth/providers/email-pass-auth.options.ts",
                                  "line": 42,
                                  "character": 14
                                }
                              ],
                              "type": {
                                "type": "instrinct",
                                "name": "boolean"
                              }
                            }
                          ],
                          "groups": [
                            {
                              "title": "Variables",
                              "kind": 32,
                              "children": [
                                870,
                                869,
                                871,
                                868
                              ]
                            }
                          ],
                          "sources": [
                            {
                              "fileName": "src/framework/auth/providers/email-pass-auth.options.ts",
                              "line": 41,
                              "character": 14
                            }
                          ]
                        }
                      }
                    }
                  ],
                  "groups": [
                    {
                      "title": "Variables",
                      "kind": 32,
                      "children": [
                        872,
                        876,
                        866
                      ]
                    }
                  ],
                  "sources": [
                    {
                      "fileName": "src/framework/auth/providers/email-pass-auth.options.ts",
                      "line": 40,
                      "character": 14
                    }
                  ]
                }
              }
            }
          ],
          "groups": [
            {
              "title": "Properties",
              "kind": 1024,
              "children": [
                856,
                847,
                851,
                860,
                848,
                849,
                850,
                852,
                864
              ]
            }
          ],
          "sources": [
            {
              "fileName": "src/framework/auth/providers/email-pass-auth.options.ts",
              "line": 22,
              "character": 46
            }
          ]
        },
        {
          "id": 825,
          "name": "NgaEmailPassModuleConfig",
          "kind": 256,
          "kindString": "Interface",
          "flags": {
            "isExported": true
          },
          "comment": {
            "tags": [
              {
                "tag": "license",
                "text": "\nCopyright Akveo. All Rights Reserved.\nLicensed under the MIT License. See License.txt in the project root for license information.\n"
              }
            ]
          },
          "children": [
            {
              "id": 826,
              "name": "alwaysFail",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isExported": true,
                "isOptional": true
              },
              "sources": [
                {
                  "fileName": "src/framework/auth/providers/email-pass-auth.options.ts",
                  "line": 7,
                  "character": 12
                }
              ],
              "type": {
                "type": "instrinct",
                "name": "boolean"
              }
            },
            {
              "id": 833,
              "name": "defaultErrors",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isExported": true,
                "isOptional": true
              },
              "sources": [
                {
                  "fileName": "src/framework/auth/providers/email-pass-auth.options.ts",
                  "line": 14,
                  "character": 15
                }
              ],
              "type": {
                "type": "instrinct",
                "isArray": true,
                "name": "string"
              }
            },
            {
              "id": 834,
              "name": "defaultMessages",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isExported": true,
                "isOptional": true
              },
              "sources": [
                {
                  "fileName": "src/framework/auth/providers/email-pass-auth.options.ts",
                  "line": 15,
                  "character": 17
                }
              ],
              "type": {
                "type": "instrinct",
                "isArray": true,
                "name": "string"
              }
            },
            {
              "id": 828,
              "name": "endpoint",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isExported": true,
                "isOptional": true
              },
              "sources": [
                {
                  "fileName": "src/framework/auth/providers/email-pass-auth.options.ts",
                  "line": 9,
                  "character": 10
                }
              ],
              "type": {
                "type": "instrinct",
                "name": "string"
              }
            },
            {
              "id": 829,
              "name": "redirect",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isExported": true,
                "isOptional": true
              },
              "sources": [
                {
                  "fileName": "src/framework/auth/providers/email-pass-auth.options.ts",
                  "line": 10,
                  "character": 10
                }
              ],
              "type": {
                "type": "reflection",
                "declaration": {
                  "id": 830,
                  "name": "__type",
                  "kind": 65536,
                  "kindString": "Type literal",
                  "flags": {},
                  "children": [
                    {
                      "id": 832,
                      "name": "failure",
                      "kind": 32,
                      "kindString": "Variable",
                      "flags": {
                        "isOptional": true
                      },
                      "sources": [
                        {
                          "fileName": "src/framework/auth/providers/email-pass-auth.options.ts",
                          "line": 12,
                          "character": 11
                        }
                      ],
                      "type": {
                        "type": "union",
                        "types": [
                          {
                            "type": "instrinct",
                            "name": "string"
                          },
                          {
                            "type": "instrinct",
                            "name": "null"
                          }
                        ]
                      }
                    },
                    {
                      "id": 831,
                      "name": "success",
                      "kind": 32,
                      "kindString": "Variable",
                      "flags": {
                        "isOptional": true
                      },
                      "sources": [
                        {
                          "fileName": "src/framework/auth/providers/email-pass-auth.options.ts",
                          "line": 11,
                          "character": 11
                        }
                      ],
                      "type": {
                        "type": "union",
                        "types": [
                          {
                            "type": "instrinct",
                            "name": "string"
                          },
                          {
                            "type": "instrinct",
                            "name": "null"
                          }
                        ]
                      }
                    }
                  ],
                  "groups": [
                    {
                      "title": "Variables",
                      "kind": 32,
                      "children": [
                        832,
                        831
                      ]
                    }
                  ],
                  "sources": [
                    {
                      "fileName": "src/framework/auth/providers/email-pass-auth.options.ts",
                      "line": 10,
                      "character": 12
                    }
                  ]
                }
              }
            },
            {
              "id": 827,
              "name": "rememberMe",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isExported": true,
                "isOptional": true
              },
              "sources": [
                {
                  "fileName": "src/framework/auth/providers/email-pass-auth.options.ts",
                  "line": 8,
                  "character": 12
                }
              ],
              "type": {
                "type": "instrinct",
                "name": "boolean"
              }
            }
          ],
          "groups": [
            {
              "title": "Properties",
              "kind": 1024,
              "children": [
                826,
                833,
                834,
                828,
                829,
                827
              ]
            }
          ],
          "sources": [
            {
              "fileName": "src/framework/auth/providers/email-pass-auth.options.ts",
              "line": 6,
              "character": 41
            }
          ],
          "extendedBy": [
            {
              "type": "reference",
              "name": "NgaEmailPassResetModuleConfig",
              "id": 835
            }
          ]
        },
        {
          "id": 835,
          "name": "NgaEmailPassResetModuleConfig",
          "kind": 256,
          "kindString": "Interface",
          "flags": {
            "isExported": true
          },
          "children": [
            {
              "id": 837,
              "name": "alwaysFail",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isExported": true,
                "isOptional": true
              },
              "sources": [
                {
                  "fileName": "src/framework/auth/providers/email-pass-auth.options.ts",
                  "line": 7,
                  "character": 12
                }
              ],
              "type": {
                "type": "instrinct",
                "name": "boolean"
              },
              "inheritedFrom": {
                "type": "reference",
                "name": "NgaEmailPassModuleConfig.alwaysFail",
                "id": 826
              }
            },
            {
              "id": 844,
              "name": "defaultErrors",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isExported": true,
                "isOptional": true
              },
              "sources": [
                {
                  "fileName": "src/framework/auth/providers/email-pass-auth.options.ts",
                  "line": 14,
                  "character": 15
                }
              ],
              "type": {
                "type": "instrinct",
                "isArray": true,
                "name": "string"
              },
              "inheritedFrom": {
                "type": "reference",
                "name": "NgaEmailPassModuleConfig.defaultErrors",
                "id": 833
              }
            },
            {
              "id": 845,
              "name": "defaultMessages",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isExported": true,
                "isOptional": true
              },
              "sources": [
                {
                  "fileName": "src/framework/auth/providers/email-pass-auth.options.ts",
                  "line": 15,
                  "character": 17
                }
              ],
              "type": {
                "type": "instrinct",
                "isArray": true,
                "name": "string"
              },
              "inheritedFrom": {
                "type": "reference",
                "name": "NgaEmailPassModuleConfig.defaultMessages",
                "id": 834
              }
            },
            {
              "id": 839,
              "name": "endpoint",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isExported": true,
                "isOptional": true
              },
              "sources": [
                {
                  "fileName": "src/framework/auth/providers/email-pass-auth.options.ts",
                  "line": 9,
                  "character": 10
                }
              ],
              "type": {
                "type": "instrinct",
                "name": "string"
              },
              "inheritedFrom": {
                "type": "reference",
                "name": "NgaEmailPassModuleConfig.endpoint",
                "id": 828
              }
            },
            {
              "id": 840,
              "name": "redirect",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isExported": true,
                "isOptional": true
              },
              "sources": [
                {
                  "fileName": "src/framework/auth/providers/email-pass-auth.options.ts",
                  "line": 10,
                  "character": 10
                }
              ],
              "type": {
                "type": "reflection",
                "declaration": {
                  "id": 841,
                  "name": "__type",
                  "kind": 65536,
                  "kindString": "Type literal",
                  "flags": {},
                  "children": [
                    {
                      "id": 843,
                      "name": "failure",
                      "kind": 32,
                      "kindString": "Variable",
                      "flags": {
                        "isOptional": true
                      },
                      "sources": [
                        {
                          "fileName": "src/framework/auth/providers/email-pass-auth.options.ts",
                          "line": 12,
                          "character": 11
                        }
                      ],
                      "type": {
                        "type": "union",
                        "types": [
                          {
                            "type": "instrinct",
                            "name": "string"
                          },
                          {
                            "type": "instrinct",
                            "name": "null"
                          }
                        ]
                      }
                    },
                    {
                      "id": 842,
                      "name": "success",
                      "kind": 32,
                      "kindString": "Variable",
                      "flags": {
                        "isOptional": true
                      },
                      "sources": [
                        {
                          "fileName": "src/framework/auth/providers/email-pass-auth.options.ts",
                          "line": 11,
                          "character": 11
                        }
                      ],
                      "type": {
                        "type": "union",
                        "types": [
                          {
                            "type": "instrinct",
                            "name": "string"
                          },
                          {
                            "type": "instrinct",
                            "name": "null"
                          }
                        ]
                      }
                    }
                  ],
                  "groups": [
                    {
                      "title": "Variables",
                      "kind": 32,
                      "children": [
                        843,
                        842
                      ]
                    }
                  ],
                  "sources": [
                    {
                      "fileName": "src/framework/auth/providers/email-pass-auth.options.ts",
                      "line": 10,
                      "character": 12
                    }
                  ]
                }
              },
              "inheritedFrom": {
                "type": "reference",
                "name": "NgaEmailPassModuleConfig.redirect",
                "id": 829
              }
            },
            {
              "id": 838,
              "name": "rememberMe",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isExported": true,
                "isOptional": true
              },
              "sources": [
                {
                  "fileName": "src/framework/auth/providers/email-pass-auth.options.ts",
                  "line": 8,
                  "character": 12
                }
              ],
              "type": {
                "type": "instrinct",
                "name": "boolean"
              },
              "inheritedFrom": {
                "type": "reference",
                "name": "NgaEmailPassModuleConfig.rememberMe",
                "id": 827
              }
            },
            {
              "id": 836,
              "name": "resetPasswordTokenKey",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isExported": true,
                "isOptional": true
              },
              "sources": [
                {
                  "fileName": "src/framework/auth/providers/email-pass-auth.options.ts",
                  "line": 19,
                  "character": 23
                }
              ],
              "type": {
                "type": "instrinct",
                "name": "string"
              }
            }
          ],
          "groups": [
            {
              "title": "Properties",
              "kind": 1024,
              "children": [
                837,
                844,
                845,
                839,
                840,
                838,
                836
              ]
            }
          ],
          "sources": [
            {
              "fileName": "src/framework/auth/providers/email-pass-auth.options.ts",
              "line": 18,
              "character": 46
            }
          ],
          "extendedTypes": [
            {
              "type": "reference",
              "name": "NgaEmailPassModuleConfig",
              "id": 825
            }
          ]
        }
      ],
      "groups": [
        {
          "title": "Interfaces",
          "kind": 256,
          "children": [
            846,
            825,
            835
          ]
        }
      ],
      "sources": [
        {
          "fileName": "src/framework/auth/providers/email-pass-auth.options.ts",
          "line": 1,
          "character": 0
        }
      ]
    },
    {
      "id": 882,
      "name": "\"src/framework/auth/providers/email-pass-auth.provider\"",
      "kind": 1,
      "kindString": "External module",
      "flags": {
        "isExported": true
      },
      "originalName": "/Users/nixa/Development/Projects/Akveo/ng2-admin/src/framework/auth/providers/email-pass-auth.provider.ts",
      "children": [
        {
          "id": 883,
          "name": "NgaEmailPassAuthProvider",
          "kind": 128,
          "kindString": "Class",
          "flags": {
            "isExported": true
          },
          "decorators": [
            {
              "name": "Injectable",
              "type": {
                "type": "reference",
                "name": "Injectable"
              },
              "arguments": {}
            }
          ],
          "children": [
            {
              "id": 955,
              "name": "constructor",
              "kind": 512,
              "kindString": "Constructor",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 958,
                  "name": "new NgaEmailPassAuthProvider",
                  "kind": 16384,
                  "kindString": "Constructor signature",
                  "flags": {},
                  "parameters": [
                    {
                      "id": 959,
                      "name": "http",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {},
                      "type": {
                        "type": "reference",
                        "name": "Http"
                      }
                    },
                    {
                      "id": 960,
                      "name": "route",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {},
                      "type": {
                        "type": "reference",
                        "name": "ActivatedRoute"
                      }
                    }
                  ],
                  "type": {
                    "type": "reference",
                    "name": "NgaEmailPassAuthProvider",
                    "id": 883
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/auth/providers/email-pass-auth.provider.ts",
                  "line": 104,
                  "character": 4
                }
              ]
            },
            {
              "id": 975,
              "name": "config",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isExported": true,
                "isProtected": true
              },
              "sources": [
                {
                  "fileName": "src/framework/auth/providers/abstract-auth.provider.ts",
                  "line": 10,
                  "character": 18
                }
              ],
              "type": {
                "type": "instrinct",
                "name": "any"
              },
              "inheritedFrom": {
                "type": "reference",
                "name": "NgaAbstractAuthProvider.config",
                "id": 649
              }
            },
            {
              "id": 956,
              "name": "http",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isConstructorProperty": true,
                "isExported": true,
                "isProtected": true
              },
              "sources": [
                {
                  "fileName": "src/framework/auth/providers/email-pass-auth.provider.ts",
                  "line": 106,
                  "character": 28
                }
              ],
              "type": {
                "type": "reference",
                "name": "Http"
              }
            },
            {
              "id": 957,
              "name": "route",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isPrivate": true,
                "isConstructorProperty": true,
                "isExported": true
              },
              "sources": [
                {
                  "fileName": "src/framework/auth/providers/email-pass-auth.provider.ts",
                  "line": 106,
                  "character": 49
                }
              ],
              "type": {
                "type": "reference",
                "name": "ActivatedRoute"
              }
            },
            {
              "id": 961,
              "name": "authenticate",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 962,
                  "name": "authenticate",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "parameters": [
                    {
                      "id": 963,
                      "name": "data",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {
                        "isOptional": true
                      },
                      "type": {
                        "type": "instrinct",
                        "name": "any"
                      }
                    }
                  ],
                  "type": {
                    "type": "reference",
                    "name": "Observable",
                    "typeArguments": [
                      {
                        "type": "reference",
                        "name": "NgaAuthResult",
                        "id": 717
                      }
                    ]
                  },
                  "overwrites": {
                    "type": "reference",
                    "name": "NgaAbstractAuthProvider.authenticate",
                    "id": 656
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/auth/providers/email-pass-auth.provider.ts",
                  "line": 110,
                  "character": 14
                }
              ],
              "overwrites": {
                "type": "reference",
                "name": "NgaAbstractAuthProvider.authenticate",
                "id": 656
              }
            },
            {
              "id": 982,
              "name": "createFailResponse",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isExported": true,
                "isProtected": true
              },
              "signatures": [
                {
                  "id": 983,
                  "name": "createFailResponse",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "parameters": [
                    {
                      "id": 984,
                      "name": "data",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {
                        "isOptional": true
                      },
                      "type": {
                        "type": "instrinct",
                        "name": "any"
                      }
                    }
                  ],
                  "type": {
                    "type": "reference",
                    "name": "Response"
                  },
                  "inheritedFrom": {
                    "type": "reference",
                    "name": "NgaAbstractAuthProvider.createFailResponse",
                    "id": 670
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/auth/providers/abstract-auth.provider.ts",
                  "line": 30,
                  "character": 30
                }
              ],
              "inheritedFrom": {
                "type": "reference",
                "name": "NgaAbstractAuthProvider.createFailResponse",
                "id": 670
              }
            },
            {
              "id": 985,
              "name": "createSuccessResponse",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isExported": true,
                "isProtected": true
              },
              "signatures": [
                {
                  "id": 986,
                  "name": "createSuccessResponse",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "parameters": [
                    {
                      "id": 987,
                      "name": "data",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {
                        "isOptional": true
                      },
                      "type": {
                        "type": "instrinct",
                        "name": "any"
                      }
                    }
                  ],
                  "type": {
                    "type": "reference",
                    "name": "Response"
                  },
                  "inheritedFrom": {
                    "type": "reference",
                    "name": "NgaAbstractAuthProvider.createSuccessResponse",
                    "id": 673
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/auth/providers/abstract-auth.provider.ts",
                  "line": 34,
                  "character": 33
                }
              ],
              "inheritedFrom": {
                "type": "reference",
                "name": "NgaAbstractAuthProvider.createSuccessResponse",
                "id": 673
              }
            },
            {
              "id": 979,
              "name": "getConfigValue",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 980,
                  "name": "getConfigValue",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "parameters": [
                    {
                      "id": 981,
                      "name": "key",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {},
                      "type": {
                        "type": "instrinct",
                        "name": "string"
                      }
                    }
                  ],
                  "type": {
                    "type": "instrinct",
                    "name": "any"
                  },
                  "inheritedFrom": {
                    "type": "reference",
                    "name": "NgaAbstractAuthProvider.getConfigValue",
                    "id": 653
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/auth/providers/abstract-auth.provider.ts",
                  "line": 16,
                  "character": 16
                }
              ],
              "inheritedFrom": {
                "type": "reference",
                "name": "NgaAbstractAuthProvider.getConfigValue",
                "id": 653
              }
            },
            {
              "id": 988,
              "name": "getJsonSafe",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isExported": true,
                "isProtected": true
              },
              "signatures": [
                {
                  "id": 989,
                  "name": "getJsonSafe",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "parameters": [
                    {
                      "id": 990,
                      "name": "res",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {},
                      "type": {
                        "type": "reference",
                        "name": "Response"
                      }
                    }
                  ],
                  "type": {
                    "type": "instrinct",
                    "name": "any"
                  },
                  "inheritedFrom": {
                    "type": "reference",
                    "name": "NgaAbstractAuthProvider.getJsonSafe",
                    "id": 676
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/auth/providers/abstract-auth.provider.ts",
                  "line": 38,
                  "character": 23
                }
              ],
              "inheritedFrom": {
                "type": "reference",
                "name": "NgaAbstractAuthProvider.getJsonSafe",
                "id": 676
              }
            },
            {
              "id": 973,
              "name": "logout",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 974,
                  "name": "logout",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "type": {
                    "type": "reference",
                    "name": "Observable",
                    "typeArguments": [
                      {
                        "type": "reference",
                        "name": "NgaAuthResult",
                        "id": 717
                      }
                    ]
                  },
                  "overwrites": {
                    "type": "reference",
                    "name": "NgaAbstractAuthProvider.logout",
                    "id": 668
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/auth/providers/email-pass-auth.provider.ts",
                  "line": 247,
                  "character": 8
                }
              ],
              "overwrites": {
                "type": "reference",
                "name": "NgaAbstractAuthProvider.logout",
                "id": 668
              }
            },
            {
              "id": 964,
              "name": "register",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 965,
                  "name": "register",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "parameters": [
                    {
                      "id": 966,
                      "name": "data",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {
                        "isOptional": true
                      },
                      "type": {
                        "type": "instrinct",
                        "name": "any"
                      }
                    }
                  ],
                  "type": {
                    "type": "reference",
                    "name": "Observable",
                    "typeArguments": [
                      {
                        "type": "reference",
                        "name": "NgaAuthResult",
                        "id": 717
                      }
                    ]
                  },
                  "overwrites": {
                    "type": "reference",
                    "name": "NgaAbstractAuthProvider.register",
                    "id": 659
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/auth/providers/email-pass-auth.provider.ts",
                  "line": 144,
                  "character": 10
                }
              ],
              "overwrites": {
                "type": "reference",
                "name": "NgaAbstractAuthProvider.register",
                "id": 659
              }
            },
            {
              "id": 967,
              "name": "requestPassword",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 968,
                  "name": "requestPassword",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "parameters": [
                    {
                      "id": 969,
                      "name": "data",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {
                        "isOptional": true
                      },
                      "type": {
                        "type": "instrinct",
                        "name": "any"
                      }
                    }
                  ],
                  "type": {
                    "type": "reference",
                    "name": "Observable",
                    "typeArguments": [
                      {
                        "type": "reference",
                        "name": "NgaAuthResult",
                        "id": 717
                      }
                    ]
                  },
                  "overwrites": {
                    "type": "reference",
                    "name": "NgaAbstractAuthProvider.requestPassword",
                    "id": 662
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/auth/providers/email-pass-auth.provider.ts",
                  "line": 178,
                  "character": 17
                }
              ],
              "overwrites": {
                "type": "reference",
                "name": "NgaAbstractAuthProvider.requestPassword",
                "id": 662
              }
            },
            {
              "id": 970,
              "name": "resetPassword",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 971,
                  "name": "resetPassword",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "parameters": [
                    {
                      "id": 972,
                      "name": "data",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {},
                      "type": {
                        "type": "instrinct",
                        "name": "any"
                      },
                      "defaultValue": " {}"
                    }
                  ],
                  "type": {
                    "type": "reference",
                    "name": "Observable",
                    "typeArguments": [
                      {
                        "type": "reference",
                        "name": "NgaAuthResult",
                        "id": 717
                      }
                    ]
                  },
                  "overwrites": {
                    "type": "reference",
                    "name": "NgaAbstractAuthProvider.resetPassword",
                    "id": 665
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/auth/providers/email-pass-auth.provider.ts",
                  "line": 211,
                  "character": 15
                }
              ],
              "overwrites": {
                "type": "reference",
                "name": "NgaAbstractAuthProvider.resetPassword",
                "id": 665
              }
            },
            {
              "id": 976,
              "name": "setConfig",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 977,
                  "name": "setConfig",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "parameters": [
                    {
                      "id": 978,
                      "name": "config",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {},
                      "type": {
                        "type": "instrinct",
                        "name": "any"
                      }
                    }
                  ],
                  "type": {
                    "type": "instrinct",
                    "name": "void"
                  },
                  "inheritedFrom": {
                    "type": "reference",
                    "name": "NgaAbstractAuthProvider.setConfig",
                    "id": 650
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/auth/providers/abstract-auth.provider.ts",
                  "line": 12,
                  "character": 11
                }
              ],
              "inheritedFrom": {
                "type": "reference",
                "name": "NgaAbstractAuthProvider.setConfig",
                "id": 650
              }
            },
            {
              "id": 884,
              "name": "defaultConfig",
              "kind": 2097152,
              "kindString": "Object literal",
              "flags": {
                "isExported": true,
                "isProtected": true
              },
              "children": [
                {
                  "id": 932,
                  "name": "errors",
                  "kind": 2097152,
                  "kindString": "Object literal",
                  "flags": {
                    "isExported": true
                  },
                  "children": [
                    {
                      "id": 933,
                      "name": "key",
                      "kind": 32,
                      "kindString": "Variable",
                      "flags": {
                        "isExported": true
                      },
                      "sources": [
                        {
                          "fileName": "src/framework/auth/providers/email-pass-auth.provider.ts",
                          "line": 78,
                          "character": 9
                        }
                      ],
                      "type": {
                        "type": "instrinct",
                        "name": "string"
                      },
                      "defaultValue": "\"data.errors\""
                    },
                    {
                      "id": 934,
                      "name": "getter",
                      "kind": 64,
                      "kindString": "Function",
                      "flags": {
                        "isExported": true
                      },
                      "signatures": [
                        {
                          "id": 935,
                          "name": "getter",
                          "kind": 4096,
                          "kindString": "Call signature",
                          "flags": {},
                          "parameters": [
                            {
                              "id": 936,
                              "name": "module",
                              "kind": 32768,
                              "kindString": "Parameter",
                              "flags": {},
                              "type": {
                                "type": "instrinct",
                                "name": "string"
                              }
                            },
                            {
                              "id": 937,
                              "name": "res",
                              "kind": 32768,
                              "kindString": "Parameter",
                              "flags": {},
                              "type": {
                                "type": "reference",
                                "name": "Response"
                              }
                            }
                          ],
                          "type": {
                            "type": "instrinct",
                            "name": "any"
                          }
                        }
                      ],
                      "sources": [
                        {
                          "fileName": "src/framework/auth/providers/email-pass-auth.provider.ts",
                          "line": 79,
                          "character": 12
                        }
                      ]
                    }
                  ],
                  "groups": [
                    {
                      "title": "Variables",
                      "kind": 32,
                      "children": [
                        933
                      ]
                    },
                    {
                      "title": "Functions",
                      "kind": 64,
                      "children": [
                        934
                      ]
                    }
                  ],
                  "sources": [
                    {
                      "fileName": "src/framework/auth/providers/email-pass-auth.provider.ts",
                      "line": 77,
                      "character": 10
                    }
                  ],
                  "type": {
                    "type": "instrinct",
                    "name": "object"
                  }
                },
                {
                  "id": 885,
                  "name": "login",
                  "kind": 2097152,
                  "kindString": "Object literal",
                  "flags": {
                    "isExported": true
                  },
                  "children": [
                    {
                      "id": 886,
                      "name": "alwaysFail",
                      "kind": 32,
                      "kindString": "Variable",
                      "flags": {
                        "isExported": true
                      },
                      "sources": [
                        {
                          "fileName": "src/framework/auth/providers/email-pass-auth.provider.ts",
                          "line": 22,
                          "character": 16
                        }
                      ],
                      "type": {
                        "type": "instrinct",
                        "name": "boolean"
                      },
                      "defaultValue": "false"
                    },
                    {
                      "id": 892,
                      "name": "defaultErrors",
                      "kind": 32,
                      "kindString": "Variable",
                      "flags": {
                        "isExported": true
                      },
                      "sources": [
                        {
                          "fileName": "src/framework/auth/providers/email-pass-auth.provider.ts",
                          "line": 29,
                          "character": 19
                        }
                      ],
                      "type": {
                        "type": "reference",
                        "name": "Array",
                        "typeArguments": [
                          {
                            "type": "instrinct",
                            "name": "string"
                          }
                        ]
                      },
                      "defaultValue": " ['Login/Email combination is not correct, please try again.']"
                    },
                    {
                      "id": 893,
                      "name": "defaultMessages",
                      "kind": 32,
                      "kindString": "Variable",
                      "flags": {
                        "isExported": true
                      },
                      "sources": [
                        {
                          "fileName": "src/framework/auth/providers/email-pass-auth.provider.ts",
                          "line": 30,
                          "character": 21
                        }
                      ],
                      "type": {
                        "type": "reference",
                        "name": "Array",
                        "typeArguments": [
                          {
                            "type": "instrinct",
                            "name": "string"
                          }
                        ]
                      },
                      "defaultValue": " ['You have been successfully logged in.']"
                    },
                    {
                      "id": 888,
                      "name": "endpoint",
                      "kind": 32,
                      "kindString": "Variable",
                      "flags": {
                        "isExported": true
                      },
                      "sources": [
                        {
                          "fileName": "src/framework/auth/providers/email-pass-auth.provider.ts",
                          "line": 24,
                          "character": 14
                        }
                      ],
                      "type": {
                        "type": "instrinct",
                        "name": "string"
                      },
                      "defaultValue": "\"/api/auth/login\""
                    },
                    {
                      "id": 887,
                      "name": "rememberMe",
                      "kind": 32,
                      "kindString": "Variable",
                      "flags": {
                        "isExported": true
                      },
                      "sources": [
                        {
                          "fileName": "src/framework/auth/providers/email-pass-auth.provider.ts",
                          "line": 23,
                          "character": 16
                        }
                      ],
                      "type": {
                        "type": "instrinct",
                        "name": "boolean"
                      },
                      "defaultValue": "true"
                    },
                    {
                      "id": 889,
                      "name": "redirect",
                      "kind": 2097152,
                      "kindString": "Object literal",
                      "flags": {
                        "isExported": true
                      },
                      "children": [
                        {
                          "id": 891,
                          "name": "failure",
                          "kind": 32,
                          "kindString": "Variable",
                          "flags": {
                            "isExported": true
                          },
                          "sources": [
                            {
                              "fileName": "src/framework/auth/providers/email-pass-auth.provider.ts",
                              "line": 27,
                              "character": 15
                            }
                          ],
                          "type": {
                            "type": "instrinct",
                            "name": "null"
                          },
                          "defaultValue": " null"
                        },
                        {
                          "id": 890,
                          "name": "success",
                          "kind": 32,
                          "kindString": "Variable",
                          "flags": {
                            "isExported": true
                          },
                          "sources": [
                            {
                              "fileName": "src/framework/auth/providers/email-pass-auth.provider.ts",
                              "line": 26,
                              "character": 15
                            }
                          ],
                          "type": {
                            "type": "instrinct",
                            "name": "string"
                          },
                          "defaultValue": "\"/\""
                        }
                      ],
                      "groups": [
                        {
                          "title": "Variables",
                          "kind": 32,
                          "children": [
                            891,
                            890
                          ]
                        }
                      ],
                      "sources": [
                        {
                          "fileName": "src/framework/auth/providers/email-pass-auth.provider.ts",
                          "line": 25,
                          "character": 14
                        }
                      ],
                      "type": {
                        "type": "instrinct",
                        "name": "object"
                      }
                    }
                  ],
                  "groups": [
                    {
                      "title": "Variables",
                      "kind": 32,
                      "children": [
                        886,
                        892,
                        893,
                        888,
                        887
                      ]
                    },
                    {
                      "title": "Object literals",
                      "kind": 2097152,
                      "children": [
                        889
                      ]
                    }
                  ],
                  "sources": [
                    {
                      "fileName": "src/framework/auth/providers/email-pass-auth.provider.ts",
                      "line": 21,
                      "character": 9
                    }
                  ],
                  "type": {
                    "type": "instrinct",
                    "name": "object"
                  }
                },
                {
                  "id": 903,
                  "name": "logout",
                  "kind": 2097152,
                  "kindString": "Object literal",
                  "flags": {
                    "isExported": true
                  },
                  "children": [
                    {
                      "id": 904,
                      "name": "alwaysFail",
                      "kind": 32,
                      "kindString": "Variable",
                      "flags": {
                        "isExported": true
                      },
                      "sources": [
                        {
                          "fileName": "src/framework/auth/providers/email-pass-auth.provider.ts",
                          "line": 44,
                          "character": 16
                        }
                      ],
                      "type": {
                        "type": "instrinct",
                        "name": "boolean"
                      },
                      "defaultValue": "false"
                    },
                    {
                      "id": 909,
                      "name": "defaultErrors",
                      "kind": 32,
                      "kindString": "Variable",
                      "flags": {
                        "isExported": true
                      },
                      "sources": [
                        {
                          "fileName": "src/framework/auth/providers/email-pass-auth.provider.ts",
                          "line": 50,
                          "character": 19
                        }
                      ],
                      "type": {
                        "type": "reference",
                        "name": "Array",
                        "typeArguments": [
                          {
                            "type": "instrinct",
                            "name": "string"
                          }
                        ]
                      },
                      "defaultValue": " ['Something went wrong, please try again.']"
                    },
                    {
                      "id": 910,
                      "name": "defaultMessages",
                      "kind": 32,
                      "kindString": "Variable",
                      "flags": {
                        "isExported": true
                      },
                      "sources": [
                        {
                          "fileName": "src/framework/auth/providers/email-pass-auth.provider.ts",
                          "line": 51,
                          "character": 21
                        }
                      ],
                      "type": {
                        "type": "reference",
                        "name": "Array",
                        "typeArguments": [
                          {
                            "type": "instrinct",
                            "name": "string"
                          }
                        ]
                      },
                      "defaultValue": " ['You have been successfully registered.']"
                    },
                    {
                      "id": 905,
                      "name": "endpoint",
                      "kind": 32,
                      "kindString": "Variable",
                      "flags": {
                        "isExported": true
                      },
                      "sources": [
                        {
                          "fileName": "src/framework/auth/providers/email-pass-auth.provider.ts",
                          "line": 45,
                          "character": 14
                        }
                      ],
                      "type": {
                        "type": "instrinct",
                        "name": "string"
                      },
                      "defaultValue": "\"/api/auth/logout\""
                    },
                    {
                      "id": 906,
                      "name": "redirect",
                      "kind": 2097152,
                      "kindString": "Object literal",
                      "flags": {
                        "isExported": true
                      },
                      "children": [
                        {
                          "id": 908,
                          "name": "failure",
                          "kind": 32,
                          "kindString": "Variable",
                          "flags": {
                            "isExported": true
                          },
                          "sources": [
                            {
                              "fileName": "src/framework/auth/providers/email-pass-auth.provider.ts",
                              "line": 48,
                              "character": 15
                            }
                          ],
                          "type": {
                            "type": "instrinct",
                            "name": "null"
                          },
                          "defaultValue": " null"
                        },
                        {
                          "id": 907,
                          "name": "success",
                          "kind": 32,
                          "kindString": "Variable",
                          "flags": {
                            "isExported": true
                          },
                          "sources": [
                            {
                              "fileName": "src/framework/auth/providers/email-pass-auth.provider.ts",
                              "line": 47,
                              "character": 15
                            }
                          ],
                          "type": {
                            "type": "instrinct",
                            "name": "string"
                          },
                          "defaultValue": "\"/\""
                        }
                      ],
                      "groups": [
                        {
                          "title": "Variables",
                          "kind": 32,
                          "children": [
                            908,
                            907
                          ]
                        }
                      ],
                      "sources": [
                        {
                          "fileName": "src/framework/auth/providers/email-pass-auth.provider.ts",
                          "line": 46,
                          "character": 14
                        }
                      ],
                      "type": {
                        "type": "instrinct",
                        "name": "object"
                      }
                    }
                  ],
                  "groups": [
                    {
                      "title": "Variables",
                      "kind": 32,
                      "children": [
                        904,
                        909,
                        910,
                        905
                      ]
                    },
                    {
                      "title": "Object literals",
                      "kind": 2097152,
                      "children": [
                        906
                      ]
                    }
                  ],
                  "sources": [
                    {
                      "fileName": "src/framework/auth/providers/email-pass-auth.provider.ts",
                      "line": 43,
                      "character": 10
                    }
                  ],
                  "type": {
                    "type": "instrinct",
                    "name": "object"
                  }
                },
                {
                  "id": 938,
                  "name": "messages",
                  "kind": 2097152,
                  "kindString": "Object literal",
                  "flags": {
                    "isExported": true
                  },
                  "children": [
                    {
                      "id": 939,
                      "name": "key",
                      "kind": 32,
                      "kindString": "Variable",
                      "flags": {
                        "isExported": true
                      },
                      "sources": [
                        {
                          "fileName": "src/framework/auth/providers/email-pass-auth.provider.ts",
                          "line": 84,
                          "character": 9
                        }
                      ],
                      "type": {
                        "type": "instrinct",
                        "name": "string"
                      },
                      "defaultValue": "\"data.messages\""
                    },
                    {
                      "id": 940,
                      "name": "getter",
                      "kind": 64,
                      "kindString": "Function",
                      "flags": {
                        "isExported": true
                      },
                      "signatures": [
                        {
                          "id": 941,
                          "name": "getter",
                          "kind": 4096,
                          "kindString": "Call signature",
                          "flags": {},
                          "parameters": [
                            {
                              "id": 942,
                              "name": "module",
                              "kind": 32768,
                              "kindString": "Parameter",
                              "flags": {},
                              "type": {
                                "type": "instrinct",
                                "name": "string"
                              }
                            },
                            {
                              "id": 943,
                              "name": "res",
                              "kind": 32768,
                              "kindString": "Parameter",
                              "flags": {},
                              "type": {
                                "type": "reference",
                                "name": "Response"
                              }
                            }
                          ],
                          "type": {
                            "type": "instrinct",
                            "name": "any"
                          }
                        }
                      ],
                      "sources": [
                        {
                          "fileName": "src/framework/auth/providers/email-pass-auth.provider.ts",
                          "line": 85,
                          "character": 12
                        }
                      ]
                    }
                  ],
                  "groups": [
                    {
                      "title": "Variables",
                      "kind": 32,
                      "children": [
                        939
                      ]
                    },
                    {
                      "title": "Functions",
                      "kind": 64,
                      "children": [
                        940
                      ]
                    }
                  ],
                  "sources": [
                    {
                      "fileName": "src/framework/auth/providers/email-pass-auth.provider.ts",
                      "line": 83,
                      "character": 12
                    }
                  ],
                  "type": {
                    "type": "instrinct",
                    "name": "object"
                  }
                },
                {
                  "id": 894,
                  "name": "register",
                  "kind": 2097152,
                  "kindString": "Object literal",
                  "flags": {
                    "isExported": true
                  },
                  "children": [
                    {
                      "id": 895,
                      "name": "alwaysFail",
                      "kind": 32,
                      "kindString": "Variable",
                      "flags": {
                        "isExported": true
                      },
                      "sources": [
                        {
                          "fileName": "src/framework/auth/providers/email-pass-auth.provider.ts",
                          "line": 33,
                          "character": 16
                        }
                      ],
                      "type": {
                        "type": "instrinct",
                        "name": "boolean"
                      },
                      "defaultValue": "false"
                    },
                    {
                      "id": 901,
                      "name": "defaultErrors",
                      "kind": 32,
                      "kindString": "Variable",
                      "flags": {
                        "isExported": true
                      },
                      "sources": [
                        {
                          "fileName": "src/framework/auth/providers/email-pass-auth.provider.ts",
                          "line": 40,
                          "character": 19
                        }
                      ],
                      "type": {
                        "type": "reference",
                        "name": "Array",
                        "typeArguments": [
                          {
                            "type": "instrinct",
                            "name": "string"
                          }
                        ]
                      },
                      "defaultValue": " ['Something went wrong, please try again.']"
                    },
                    {
                      "id": 902,
                      "name": "defaultMessages",
                      "kind": 32,
                      "kindString": "Variable",
                      "flags": {
                        "isExported": true
                      },
                      "sources": [
                        {
                          "fileName": "src/framework/auth/providers/email-pass-auth.provider.ts",
                          "line": 41,
                          "character": 21
                        }
                      ],
                      "type": {
                        "type": "reference",
                        "name": "Array",
                        "typeArguments": [
                          {
                            "type": "instrinct",
                            "name": "string"
                          }
                        ]
                      },
                      "defaultValue": " ['You have been successfully registered.']"
                    },
                    {
                      "id": 897,
                      "name": "endpoint",
                      "kind": 32,
                      "kindString": "Variable",
                      "flags": {
                        "isExported": true
                      },
                      "sources": [
                        {
                          "fileName": "src/framework/auth/providers/email-pass-auth.provider.ts",
                          "line": 35,
                          "character": 14
                        }
                      ],
                      "type": {
                        "type": "instrinct",
                        "name": "string"
                      },
                      "defaultValue": "\"/api/auth/register\""
                    },
                    {
                      "id": 896,
                      "name": "rememberMe",
                      "kind": 32,
                      "kindString": "Variable",
                      "flags": {
                        "isExported": true
                      },
                      "sources": [
                        {
                          "fileName": "src/framework/auth/providers/email-pass-auth.provider.ts",
                          "line": 34,
                          "character": 16
                        }
                      ],
                      "type": {
                        "type": "instrinct",
                        "name": "boolean"
                      },
                      "defaultValue": "true"
                    },
                    {
                      "id": 898,
                      "name": "redirect",
                      "kind": 2097152,
                      "kindString": "Object literal",
                      "flags": {
                        "isExported": true
                      },
                      "children": [
                        {
                          "id": 900,
                          "name": "failure",
                          "kind": 32,
                          "kindString": "Variable",
                          "flags": {
                            "isExported": true
                          },
                          "sources": [
                            {
                              "fileName": "src/framework/auth/providers/email-pass-auth.provider.ts",
                              "line": 38,
                              "character": 15
                            }
                          ],
                          "type": {
                            "type": "instrinct",
                            "name": "null"
                          },
                          "defaultValue": " null"
                        },
                        {
                          "id": 899,
                          "name": "success",
                          "kind": 32,
                          "kindString": "Variable",
                          "flags": {
                            "isExported": true
                          },
                          "sources": [
                            {
                              "fileName": "src/framework/auth/providers/email-pass-auth.provider.ts",
                              "line": 37,
                              "character": 15
                            }
                          ],
                          "type": {
                            "type": "instrinct",
                            "name": "string"
                          },
                          "defaultValue": "\"/\""
                        }
                      ],
                      "groups": [
                        {
                          "title": "Variables",
                          "kind": 32,
                          "children": [
                            900,
                            899
                          ]
                        }
                      ],
                      "sources": [
                        {
                          "fileName": "src/framework/auth/providers/email-pass-auth.provider.ts",
                          "line": 36,
                          "character": 14
                        }
                      ],
                      "type": {
                        "type": "instrinct",
                        "name": "object"
                      }
                    }
                  ],
                  "groups": [
                    {
                      "title": "Variables",
                      "kind": 32,
                      "children": [
                        895,
                        901,
                        902,
                        897,
                        896
                      ]
                    },
                    {
                      "title": "Object literals",
                      "kind": 2097152,
                      "children": [
                        898
                      ]
                    }
                  ],
                  "sources": [
                    {
                      "fileName": "src/framework/auth/providers/email-pass-auth.provider.ts",
                      "line": 32,
                      "character": 12
                    }
                  ],
                  "type": {
                    "type": "instrinct",
                    "name": "object"
                  }
                },
                {
                  "id": 911,
                  "name": "requestPass",
                  "kind": 2097152,
                  "kindString": "Object literal",
                  "flags": {
                    "isExported": true
                  },
                  "children": [
                    {
                      "id": 916,
                      "name": "defaultErrors",
                      "kind": 32,
                      "kindString": "Variable",
                      "flags": {
                        "isExported": true
                      },
                      "sources": [
                        {
                          "fileName": "src/framework/auth/providers/email-pass-auth.provider.ts",
                          "line": 59,
                          "character": 19
                        }
                      ],
                      "type": {
                        "type": "reference",
                        "name": "Array",
                        "typeArguments": [
                          {
                            "type": "instrinct",
                            "name": "string"
                          }
                        ]
                      },
                      "defaultValue": " ['Something went wrong, please try again.']"
                    },
                    {
                      "id": 917,
                      "name": "defaultMessages",
                      "kind": 32,
                      "kindString": "Variable",
                      "flags": {
                        "isExported": true
                      },
                      "sources": [
                        {
                          "fileName": "src/framework/auth/providers/email-pass-auth.provider.ts",
                          "line": 60,
                          "character": 21
                        }
                      ],
                      "type": {
                        "type": "reference",
                        "name": "Array",
                        "typeArguments": [
                          {
                            "type": "instrinct",
                            "name": "string"
                          }
                        ]
                      },
                      "defaultValue": " ['Reset password instructions have been sent to your email.']"
                    },
                    {
                      "id": 912,
                      "name": "endpoint",
                      "kind": 32,
                      "kindString": "Variable",
                      "flags": {
                        "isExported": true
                      },
                      "sources": [
                        {
                          "fileName": "src/framework/auth/providers/email-pass-auth.provider.ts",
                          "line": 54,
                          "character": 14
                        }
                      ],
                      "type": {
                        "type": "instrinct",
                        "name": "string"
                      },
                      "defaultValue": "\"/api/auth/request-pass\""
                    },
                    {
                      "id": 913,
                      "name": "redirect",
                      "kind": 2097152,
                      "kindString": "Object literal",
                      "flags": {
                        "isExported": true
                      },
                      "children": [
                        {
                          "id": 915,
                          "name": "failure",
                          "kind": 32,
                          "kindString": "Variable",
                          "flags": {
                            "isExported": true
                          },
                          "sources": [
                            {
                              "fileName": "src/framework/auth/providers/email-pass-auth.provider.ts",
                              "line": 57,
                              "character": 15
                            }
                          ],
                          "type": {
                            "type": "instrinct",
                            "name": "null"
                          },
                          "defaultValue": " null"
                        },
                        {
                          "id": 914,
                          "name": "success",
                          "kind": 32,
                          "kindString": "Variable",
                          "flags": {
                            "isExported": true
                          },
                          "sources": [
                            {
                              "fileName": "src/framework/auth/providers/email-pass-auth.provider.ts",
                              "line": 56,
                              "character": 15
                            }
                          ],
                          "type": {
                            "type": "instrinct",
                            "name": "string"
                          },
                          "defaultValue": "\"/\""
                        }
                      ],
                      "groups": [
                        {
                          "title": "Variables",
                          "kind": 32,
                          "children": [
                            915,
                            914
                          ]
                        }
                      ],
                      "sources": [
                        {
                          "fileName": "src/framework/auth/providers/email-pass-auth.provider.ts",
                          "line": 55,
                          "character": 14
                        }
                      ],
                      "type": {
                        "type": "instrinct",
                        "name": "object"
                      }
                    }
                  ],
                  "groups": [
                    {
                      "title": "Variables",
                      "kind": 32,
                      "children": [
                        916,
                        917,
                        912
                      ]
                    },
                    {
                      "title": "Object literals",
                      "kind": 2097152,
                      "children": [
                        913
                      ]
                    }
                  ],
                  "sources": [
                    {
                      "fileName": "src/framework/auth/providers/email-pass-auth.provider.ts",
                      "line": 53,
                      "character": 15
                    }
                  ],
                  "type": {
                    "type": "instrinct",
                    "name": "object"
                  }
                },
                {
                  "id": 918,
                  "name": "resetPass",
                  "kind": 2097152,
                  "kindString": "Object literal",
                  "flags": {
                    "isExported": true
                  },
                  "children": [
                    {
                      "id": 924,
                      "name": "defaultErrors",
                      "kind": 32,
                      "kindString": "Variable",
                      "flags": {
                        "isExported": true
                      },
                      "sources": [
                        {
                          "fileName": "src/framework/auth/providers/email-pass-auth.provider.ts",
                          "line": 69,
                          "character": 19
                        }
                      ],
                      "type": {
                        "type": "reference",
                        "name": "Array",
                        "typeArguments": [
                          {
                            "type": "instrinct",
                            "name": "string"
                          }
                        ]
                      },
                      "defaultValue": " ['Something went wrong, please try again.']"
                    },
                    {
                      "id": 925,
                      "name": "defaultMessages",
                      "kind": 32,
                      "kindString": "Variable",
                      "flags": {
                        "isExported": true
                      },
                      "sources": [
                        {
                          "fileName": "src/framework/auth/providers/email-pass-auth.provider.ts",
                          "line": 70,
                          "character": 21
                        }
                      ],
                      "type": {
                        "type": "reference",
                        "name": "Array",
                        "typeArguments": [
                          {
                            "type": "instrinct",
                            "name": "string"
                          }
                        ]
                      },
                      "defaultValue": " ['Your password has been successfully changed.']"
                    },
                    {
                      "id": 919,
                      "name": "endpoint",
                      "kind": 32,
                      "kindString": "Variable",
                      "flags": {
                        "isExported": true
                      },
                      "sources": [
                        {
                          "fileName": "src/framework/auth/providers/email-pass-auth.provider.ts",
                          "line": 63,
                          "character": 14
                        }
                      ],
                      "type": {
                        "type": "instrinct",
                        "name": "string"
                      },
                      "defaultValue": "\"/api/auth/reset-pass\""
                    },
                    {
                      "id": 923,
                      "name": "resetPasswordTokenKey",
                      "kind": 32,
                      "kindString": "Variable",
                      "flags": {
                        "isExported": true
                      },
                      "sources": [
                        {
                          "fileName": "src/framework/auth/providers/email-pass-auth.provider.ts",
                          "line": 68,
                          "character": 27
                        }
                      ],
                      "type": {
                        "type": "instrinct",
                        "name": "string"
                      },
                      "defaultValue": "\"reset_password_token\""
                    },
                    {
                      "id": 920,
                      "name": "redirect",
                      "kind": 2097152,
                      "kindString": "Object literal",
                      "flags": {
                        "isExported": true
                      },
                      "children": [
                        {
                          "id": 922,
                          "name": "failure",
                          "kind": 32,
                          "kindString": "Variable",
                          "flags": {
                            "isExported": true
                          },
                          "sources": [
                            {
                              "fileName": "src/framework/auth/providers/email-pass-auth.provider.ts",
                              "line": 66,
                              "character": 15
                            }
                          ],
                          "type": {
                            "type": "instrinct",
                            "name": "null"
                          },
                          "defaultValue": " null"
                        },
                        {
                          "id": 921,
                          "name": "success",
                          "kind": 32,
                          "kindString": "Variable",
                          "flags": {
                            "isExported": true
                          },
                          "sources": [
                            {
                              "fileName": "src/framework/auth/providers/email-pass-auth.provider.ts",
                              "line": 65,
                              "character": 15
                            }
                          ],
                          "type": {
                            "type": "instrinct",
                            "name": "string"
                          },
                          "defaultValue": "\"/\""
                        }
                      ],
                      "groups": [
                        {
                          "title": "Variables",
                          "kind": 32,
                          "children": [
                            922,
                            921
                          ]
                        }
                      ],
                      "sources": [
                        {
                          "fileName": "src/framework/auth/providers/email-pass-auth.provider.ts",
                          "line": 64,
                          "character": 14
                        }
                      ],
                      "type": {
                        "type": "instrinct",
                        "name": "object"
                      }
                    }
                  ],
                  "groups": [
                    {
                      "title": "Variables",
                      "kind": 32,
                      "children": [
                        924,
                        925,
                        919,
                        923
                      ]
                    },
                    {
                      "title": "Object literals",
                      "kind": 2097152,
                      "children": [
                        920
                      ]
                    }
                  ],
                  "sources": [
                    {
                      "fileName": "src/framework/auth/providers/email-pass-auth.provider.ts",
                      "line": 62,
                      "character": 13
                    }
                  ],
                  "type": {
                    "type": "instrinct",
                    "name": "object"
                  }
                },
                {
                  "id": 926,
                  "name": "token",
                  "kind": 2097152,
                  "kindString": "Object literal",
                  "flags": {
                    "isExported": true
                  },
                  "children": [
                    {
                      "id": 927,
                      "name": "key",
                      "kind": 32,
                      "kindString": "Variable",
                      "flags": {
                        "isExported": true
                      },
                      "sources": [
                        {
                          "fileName": "src/framework/auth/providers/email-pass-auth.provider.ts",
                          "line": 73,
                          "character": 9
                        }
                      ],
                      "type": {
                        "type": "instrinct",
                        "name": "string"
                      },
                      "defaultValue": "\"data.token\""
                    },
                    {
                      "id": 928,
                      "name": "getter",
                      "kind": 64,
                      "kindString": "Function",
                      "flags": {
                        "isExported": true
                      },
                      "signatures": [
                        {
                          "id": 929,
                          "name": "getter",
                          "kind": 4096,
                          "kindString": "Call signature",
                          "flags": {},
                          "parameters": [
                            {
                              "id": 930,
                              "name": "module",
                              "kind": 32768,
                              "kindString": "Parameter",
                              "flags": {},
                              "type": {
                                "type": "instrinct",
                                "name": "string"
                              }
                            },
                            {
                              "id": 931,
                              "name": "res",
                              "kind": 32768,
                              "kindString": "Parameter",
                              "flags": {},
                              "type": {
                                "type": "reference",
                                "name": "Response"
                              }
                            }
                          ],
                          "type": {
                            "type": "instrinct",
                            "name": "any"
                          }
                        }
                      ],
                      "sources": [
                        {
                          "fileName": "src/framework/auth/providers/email-pass-auth.provider.ts",
                          "line": 74,
                          "character": 12
                        }
                      ]
                    }
                  ],
                  "groups": [
                    {
                      "title": "Variables",
                      "kind": 32,
                      "children": [
                        927
                      ]
                    },
                    {
                      "title": "Functions",
                      "kind": 64,
                      "children": [
                        928
                      ]
                    }
                  ],
                  "sources": [
                    {
                      "fileName": "src/framework/auth/providers/email-pass-auth.provider.ts",
                      "line": 72,
                      "character": 9
                    }
                  ],
                  "type": {
                    "type": "instrinct",
                    "name": "object"
                  }
                },
                {
                  "id": 944,
                  "name": "validation",
                  "kind": 2097152,
                  "kindString": "Object literal",
                  "flags": {
                    "isExported": true
                  },
                  "children": [
                    {
                      "id": 949,
                      "name": "email",
                      "kind": 2097152,
                      "kindString": "Object literal",
                      "flags": {
                        "isExported": true
                      },
                      "children": [
                        {
                          "id": 950,
                          "name": "required",
                          "kind": 32,
                          "kindString": "Variable",
                          "flags": {
                            "isExported": true
                          },
                          "sources": [
                            {
                              "fileName": "src/framework/auth/providers/email-pass-auth.provider.ts",
                              "line": 96,
                              "character": 16
                            }
                          ],
                          "type": {
                            "type": "instrinct",
                            "name": "boolean"
                          },
                          "defaultValue": "true"
                        }
                      ],
                      "groups": [
                        {
                          "title": "Variables",
                          "kind": 32,
                          "children": [
                            950
                          ]
                        }
                      ],
                      "sources": [
                        {
                          "fileName": "src/framework/auth/providers/email-pass-auth.provider.ts",
                          "line": 95,
                          "character": 11
                        }
                      ],
                      "type": {
                        "type": "instrinct",
                        "name": "object"
                      }
                    },
                    {
                      "id": 951,
                      "name": "fullName",
                      "kind": 2097152,
                      "kindString": "Object literal",
                      "flags": {
                        "isExported": true
                      },
                      "children": [
                        {
                          "id": 954,
                          "name": "maxLength",
                          "kind": 32,
                          "kindString": "Variable",
                          "flags": {
                            "isExported": true
                          },
                          "sources": [
                            {
                              "fileName": "src/framework/auth/providers/email-pass-auth.provider.ts",
                              "line": 101,
                              "character": 17
                            }
                          ],
                          "type": {
                            "type": "instrinct",
                            "name": "number"
                          },
                          "defaultValue": "50"
                        },
                        {
                          "id": 953,
                          "name": "minLength",
                          "kind": 32,
                          "kindString": "Variable",
                          "flags": {
                            "isExported": true
                          },
                          "sources": [
                            {
                              "fileName": "src/framework/auth/providers/email-pass-auth.provider.ts",
                              "line": 100,
                              "character": 17
                            }
                          ],
                          "type": {
                            "type": "instrinct",
                            "name": "number"
                          },
                          "defaultValue": "4"
                        },
                        {
                          "id": 952,
                          "name": "required",
                          "kind": 32,
                          "kindString": "Variable",
                          "flags": {
                            "isExported": true
                          },
                          "sources": [
                            {
                              "fileName": "src/framework/auth/providers/email-pass-auth.provider.ts",
                              "line": 99,
                              "character": 16
                            }
                          ],
                          "type": {
                            "type": "instrinct",
                            "name": "boolean"
                          },
                          "defaultValue": "false"
                        }
                      ],
                      "groups": [
                        {
                          "title": "Variables",
                          "kind": 32,
                          "children": [
                            954,
                            953,
                            952
                          ]
                        }
                      ],
                      "sources": [
                        {
                          "fileName": "src/framework/auth/providers/email-pass-auth.provider.ts",
                          "line": 98,
                          "character": 14
                        }
                      ],
                      "type": {
                        "type": "instrinct",
                        "name": "object"
                      }
                    },
                    {
                      "id": 945,
                      "name": "password",
                      "kind": 2097152,
                      "kindString": "Object literal",
                      "flags": {
                        "isExported": true
                      },
                      "children": [
                        {
                          "id": 948,
                          "name": "maxLength",
                          "kind": 32,
                          "kindString": "Variable",
                          "flags": {
                            "isExported": true
                          },
                          "sources": [
                            {
                              "fileName": "src/framework/auth/providers/email-pass-auth.provider.ts",
                              "line": 93,
                              "character": 17
                            }
                          ],
                          "type": {
                            "type": "instrinct",
                            "name": "number"
                          },
                          "defaultValue": "30"
                        },
                        {
                          "id": 947,
                          "name": "minLength",
                          "kind": 32,
                          "kindString": "Variable",
                          "flags": {
                            "isExported": true
                          },
                          "sources": [
                            {
                              "fileName": "src/framework/auth/providers/email-pass-auth.provider.ts",
                              "line": 92,
                              "character": 17
                            }
                          ],
                          "type": {
                            "type": "instrinct",
                            "name": "number"
                          },
                          "defaultValue": "4"
                        },
                        {
                          "id": 946,
                          "name": "required",
                          "kind": 32,
                          "kindString": "Variable",
                          "flags": {
                            "isExported": true
                          },
                          "sources": [
                            {
                              "fileName": "src/framework/auth/providers/email-pass-auth.provider.ts",
                              "line": 91,
                              "character": 16
                            }
                          ],
                          "type": {
                            "type": "instrinct",
                            "name": "boolean"
                          },
                          "defaultValue": "true"
                        }
                      ],
                      "groups": [
                        {
                          "title": "Variables",
                          "kind": 32,
                          "children": [
                            948,
                            947,
                            946
                          ]
                        }
                      ],
                      "sources": [
                        {
                          "fileName": "src/framework/auth/providers/email-pass-auth.provider.ts",
                          "line": 90,
                          "character": 14
                        }
                      ],
                      "type": {
                        "type": "instrinct",
                        "name": "object"
                      }
                    }
                  ],
                  "groups": [
                    {
                      "title": "Object literals",
                      "kind": 2097152,
                      "children": [
                        949,
                        951,
                        945
                      ]
                    }
                  ],
                  "sources": [
                    {
                      "fileName": "src/framework/auth/providers/email-pass-auth.provider.ts",
                      "line": 89,
                      "character": 14
                    }
                  ],
                  "type": {
                    "type": "instrinct",
                    "name": "object"
                  }
                }
              ],
              "groups": [
                {
                  "title": "Object literals",
                  "kind": 2097152,
                  "children": [
                    932,
                    885,
                    903,
                    938,
                    894,
                    911,
                    918,
                    926,
                    944
                  ]
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/auth/providers/email-pass-auth.provider.ts",
                  "line": 20,
                  "character": 25
                }
              ],
              "type": {
                "type": "instrinct",
                "name": "object"
              },
              "overwrites": {
                "type": "reference",
                "name": "NgaAbstractAuthProvider.defaultConfig",
                "id": 648
              }
            }
          ],
          "groups": [
            {
              "title": "Constructors",
              "kind": 512,
              "children": [
                955
              ]
            },
            {
              "title": "Properties",
              "kind": 1024,
              "children": [
                975,
                956,
                957
              ]
            },
            {
              "title": "Methods",
              "kind": 2048,
              "children": [
                961,
                982,
                985,
                979,
                988,
                973,
                964,
                967,
                970,
                976
              ]
            },
            {
              "title": "Object literals",
              "kind": 2097152,
              "children": [
                884
              ]
            }
          ],
          "sources": [
            {
              "fileName": "src/framework/auth/providers/email-pass-auth.provider.ts",
              "line": 18,
              "character": 37
            }
          ],
          "extendedTypes": [
            {
              "type": "reference",
              "name": "NgaAbstractAuthProvider",
              "id": 647
            }
          ]
        }
      ],
      "groups": [
        {
          "title": "Classes",
          "kind": 128,
          "children": [
            883
          ]
        }
      ],
      "sources": [
        {
          "fileName": "src/framework/auth/providers/email-pass-auth.provider.ts",
          "line": 1,
          "character": 0
        }
      ]
    },
    {
      "id": 716,
      "name": "\"src/framework/auth/services/auth.service\"",
      "kind": 1,
      "kindString": "External module",
      "flags": {
        "isExported": true
      },
      "originalName": "/Users/nixa/Development/Projects/Akveo/ng2-admin/src/framework/auth/services/auth.service.ts",
      "children": [
        {
          "id": 717,
          "name": "NgaAuthResult",
          "kind": 128,
          "kindString": "Class",
          "flags": {
            "isExported": true
          },
          "children": [
            {
              "id": 721,
              "name": "constructor",
              "kind": 512,
              "kindString": "Constructor",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 725,
                  "name": "new NgaAuthResult",
                  "kind": 16384,
                  "kindString": "Constructor signature",
                  "flags": {},
                  "parameters": [
                    {
                      "id": 726,
                      "name": "success",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {},
                      "type": {
                        "type": "instrinct",
                        "name": "boolean"
                      }
                    },
                    {
                      "id": 727,
                      "name": "response",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {
                        "isOptional": true
                      },
                      "type": {
                        "type": "instrinct",
                        "name": "any"
                      }
                    },
                    {
                      "id": 728,
                      "name": "redirect",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {
                        "isOptional": true
                      },
                      "type": {
                        "type": "instrinct",
                        "name": "any"
                      }
                    },
                    {
                      "id": 729,
                      "name": "errors",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {
                        "isOptional": true
                      },
                      "type": {
                        "type": "instrinct",
                        "name": "any"
                      }
                    },
                    {
                      "id": 730,
                      "name": "messages",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {
                        "isOptional": true
                      },
                      "type": {
                        "type": "instrinct",
                        "name": "any"
                      }
                    },
                    {
                      "id": 731,
                      "name": "token",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {
                        "isOptional": true
                      },
                      "type": {
                        "type": "instrinct",
                        "name": "any"
                      }
                    }
                  ],
                  "type": {
                    "type": "reference",
                    "name": "NgaAuthResult",
                    "id": 717
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/auth/services/auth.service.ts",
                  "line": 16,
                  "character": 36
                }
              ]
            },
            {
              "id": 719,
              "name": "errors",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isExported": true,
                "isProtected": true
              },
              "sources": [
                {
                  "fileName": "src/framework/auth/services/auth.service.ts",
                  "line": 15,
                  "character": 18
                }
              ],
              "type": {
                "type": "instrinct",
                "isArray": true,
                "name": "string"
              },
              "defaultValue": " []"
            },
            {
              "id": 720,
              "name": "messages",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isExported": true,
                "isProtected": true
              },
              "sources": [
                {
                  "fileName": "src/framework/auth/services/auth.service.ts",
                  "line": 16,
                  "character": 20
                }
              ],
              "type": {
                "type": "instrinct",
                "isArray": true,
                "name": "string"
              },
              "defaultValue": " []"
            },
            {
              "id": 724,
              "name": "redirect",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isConstructorProperty": true,
                "isExported": true,
                "isProtected": true,
                "isOptional": true
              },
              "sources": [
                {
                  "fileName": "src/framework/auth/services/auth.service.ts",
                  "line": 20,
                  "character": 32
                }
              ],
              "type": {
                "type": "instrinct",
                "name": "any"
              }
            },
            {
              "id": 723,
              "name": "response",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isConstructorProperty": true,
                "isExported": true,
                "isProtected": true,
                "isOptional": true
              },
              "sources": [
                {
                  "fileName": "src/framework/auth/services/auth.service.ts",
                  "line": 19,
                  "character": 32
                }
              ],
              "type": {
                "type": "instrinct",
                "name": "any"
              }
            },
            {
              "id": 722,
              "name": "success",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isConstructorProperty": true,
                "isExported": true,
                "isProtected": true
              },
              "sources": [
                {
                  "fileName": "src/framework/auth/services/auth.service.ts",
                  "line": 18,
                  "character": 31
                }
              ],
              "type": {
                "type": "instrinct",
                "name": "boolean"
              }
            },
            {
              "id": 718,
              "name": "token",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isExported": true,
                "isProtected": true
              },
              "sources": [
                {
                  "fileName": "src/framework/auth/services/auth.service.ts",
                  "line": 14,
                  "character": 17
                }
              ],
              "type": {
                "type": "instrinct",
                "name": "any"
              }
            },
            {
              "id": 738,
              "name": "getErrors",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 739,
                  "name": "getErrors",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "type": {
                    "type": "instrinct",
                    "isArray": true,
                    "name": "string"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/auth/services/auth.service.ts",
                  "line": 49,
                  "character": 11
                }
              ]
            },
            {
              "id": 740,
              "name": "getMessages",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 741,
                  "name": "getMessages",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "type": {
                    "type": "instrinct",
                    "isArray": true,
                    "name": "string"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/auth/services/auth.service.ts",
                  "line": 53,
                  "character": 13
                }
              ]
            },
            {
              "id": 736,
              "name": "getRedirect",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 737,
                  "name": "getRedirect",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "type": {
                    "type": "instrinct",
                    "name": "any"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/auth/services/auth.service.ts",
                  "line": 46,
                  "character": 13
                }
              ]
            },
            {
              "id": 732,
              "name": "getResponse",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 733,
                  "name": "getResponse",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "type": {
                    "type": "instrinct",
                    "name": "any"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/auth/services/auth.service.ts",
                  "line": 38,
                  "character": 13
                }
              ]
            },
            {
              "id": 734,
              "name": "getTokenValue",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 735,
                  "name": "getTokenValue",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "type": {
                    "type": "instrinct",
                    "name": "any"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/auth/services/auth.service.ts",
                  "line": 42,
                  "character": 15
                }
              ]
            },
            {
              "id": 744,
              "name": "isFailure",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 745,
                  "name": "isFailure",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "type": {
                    "type": "instrinct",
                    "name": "boolean"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/auth/services/auth.service.ts",
                  "line": 61,
                  "character": 11
                }
              ]
            },
            {
              "id": 742,
              "name": "isSuccess",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 743,
                  "name": "isSuccess",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "type": {
                    "type": "instrinct",
                    "name": "boolean"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/auth/services/auth.service.ts",
                  "line": 57,
                  "character": 11
                }
              ]
            }
          ],
          "groups": [
            {
              "title": "Constructors",
              "kind": 512,
              "children": [
                721
              ]
            },
            {
              "title": "Properties",
              "kind": 1024,
              "children": [
                719,
                720,
                724,
                723,
                722,
                718
              ]
            },
            {
              "title": "Methods",
              "kind": 2048,
              "children": [
                738,
                740,
                736,
                732,
                734,
                744,
                742
              ]
            }
          ],
          "sources": [
            {
              "fileName": "src/framework/auth/services/auth.service.ts",
              "line": 12,
              "character": 26
            }
          ]
        },
        {
          "id": 746,
          "name": "NgaAuthService",
          "kind": 128,
          "kindString": "Class",
          "flags": {
            "isExported": true
          },
          "decorators": [
            {
              "name": "Injectable",
              "type": {
                "type": "reference",
                "name": "Injectable"
              },
              "arguments": {}
            }
          ],
          "children": [
            {
              "id": 747,
              "name": "constructor",
              "kind": 512,
              "kindString": "Constructor",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 750,
                  "name": "new NgaAuthService",
                  "kind": 16384,
                  "kindString": "Constructor signature",
                  "flags": {},
                  "parameters": [
                    {
                      "id": 751,
                      "name": "providers",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {},
                      "type": {
                        "type": "instrinct",
                        "name": "any"
                      },
                      "defaultValue": " {}"
                    },
                    {
                      "id": 752,
                      "name": "tokenService",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {},
                      "type": {
                        "type": "reference",
                        "name": "NgaTokenService",
                        "id": 680
                      }
                    }
                  ],
                  "type": {
                    "type": "reference",
                    "name": "NgaAuthService",
                    "id": 746
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/auth/services/auth.service.ts",
                  "line": 67,
                  "character": 29
                }
              ]
            },
            {
              "id": 748,
              "name": "providers",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isConstructorProperty": true,
                "isExported": true,
                "isProtected": true
              },
              "sources": [
                {
                  "fileName": "src/framework/auth/services/auth.service.ts",
                  "line": 69,
                  "character": 33
                }
              ],
              "type": {
                "type": "instrinct",
                "name": "any"
              }
            },
            {
              "id": 749,
              "name": "tokenService",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isConstructorProperty": true,
                "isExported": true,
                "isProtected": true
              },
              "sources": [
                {
                  "fileName": "src/framework/auth/services/auth.service.ts",
                  "line": 69,
                  "character": 67
                }
              ],
              "type": {
                "type": "reference",
                "name": "NgaTokenService",
                "id": 680
              }
            },
            {
              "id": 761,
              "name": "authenticate",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 762,
                  "name": "authenticate",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "comment": {
                    "shortText": "Authenticates with the selected provider\nStores received token in the token storage",
                    "text": "Example:\nauthenticate('email', {email: 'email@example.com', password: 'test'})\n",
                    "returns": "\n"
                  },
                  "parameters": [
                    {
                      "id": 763,
                      "name": "provider",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {},
                      "comment": {},
                      "type": {
                        "type": "instrinct",
                        "name": "string"
                      }
                    },
                    {
                      "id": 764,
                      "name": "data",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {
                        "isOptional": true
                      },
                      "comment": {},
                      "type": {
                        "type": "instrinct",
                        "name": "any"
                      }
                    }
                  ],
                  "type": {
                    "type": "reference",
                    "name": "Observable",
                    "typeArguments": [
                      {
                        "type": "reference",
                        "name": "NgaAuthResult",
                        "id": 717
                      }
                    ]
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/auth/services/auth.service.ts",
                  "line": 115,
                  "character": 14
                }
              ]
            },
            {
              "id": 780,
              "name": "getProvider",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 781,
                  "name": "getProvider",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "parameters": [
                    {
                      "id": 782,
                      "name": "provider",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {},
                      "type": {
                        "type": "instrinct",
                        "name": "string"
                      }
                    }
                  ],
                  "type": {
                    "type": "reference",
                    "name": "NgaAbstractAuthProvider",
                    "id": 647
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/auth/services/auth.service.ts",
                  "line": 191,
                  "character": 13
                }
              ]
            },
            {
              "id": 753,
              "name": "getToken",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 754,
                  "name": "getToken",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "comment": {
                    "shortText": "Retrieves current authenticated token stored",
                    "returns": "\n"
                  },
                  "type": {
                    "type": "reference",
                    "name": "Observable",
                    "typeArguments": [
                      {
                        "type": "instrinct",
                        "name": "any"
                      }
                    ]
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/auth/services/auth.service.ts",
                  "line": 76,
                  "character": 10
                }
              ]
            },
            {
              "id": 755,
              "name": "isAuthenticated",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 756,
                  "name": "isAuthenticated",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "comment": {
                    "shortText": "Returns true if auth token is presented in the token storage",
                    "returns": "\n"
                  },
                  "type": {
                    "type": "reference",
                    "name": "Observable",
                    "typeArguments": [
                      {
                        "type": "instrinct",
                        "name": "any"
                      }
                    ]
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/auth/services/auth.service.ts",
                  "line": 84,
                  "character": 17
                }
              ]
            },
            {
              "id": 769,
              "name": "logout",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 770,
                  "name": "logout",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "comment": {
                    "shortText": "Sign outs with the selected provider\nRemoves token from the token storage",
                    "text": "Example:\nlogout('email')\n",
                    "returns": "\n"
                  },
                  "parameters": [
                    {
                      "id": 771,
                      "name": "provider",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {},
                      "comment": {},
                      "type": {
                        "type": "instrinct",
                        "name": "string"
                      }
                    }
                  ],
                  "type": {
                    "type": "reference",
                    "name": "Observable",
                    "typeArguments": [
                      {
                        "type": "reference",
                        "name": "NgaAuthResult",
                        "id": 717
                      }
                    ]
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/auth/services/auth.service.ts",
                  "line": 154,
                  "character": 8
                }
              ]
            },
            {
              "id": 759,
              "name": "onAuthenticationChange",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 760,
                  "name": "onAuthenticationChange",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "comment": {
                    "shortText": "Returns authentication status stream",
                    "returns": "\n"
                  },
                  "type": {
                    "type": "reference",
                    "name": "Observable",
                    "typeArguments": [
                      {
                        "type": "instrinct",
                        "name": "any"
                      }
                    ]
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/auth/services/auth.service.ts",
                  "line": 100,
                  "character": 24
                }
              ]
            },
            {
              "id": 757,
              "name": "onTokenChange",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 758,
                  "name": "onTokenChange",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "comment": {
                    "shortText": "Returns tokens stream",
                    "returns": "\n"
                  },
                  "type": {
                    "type": "reference",
                    "name": "Observable",
                    "typeArguments": [
                      {
                        "type": "instrinct",
                        "name": "any"
                      }
                    ]
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/auth/services/auth.service.ts",
                  "line": 92,
                  "character": 15
                }
              ]
            },
            {
              "id": 765,
              "name": "register",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 766,
                  "name": "register",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "comment": {
                    "shortText": "Registers with the selected provider\nStores received token in the token storage",
                    "text": "Example:\nregister('email', {email: 'email@example.com', name: 'Some Name', password: 'test'})\n",
                    "returns": "\n"
                  },
                  "parameters": [
                    {
                      "id": 767,
                      "name": "provider",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {},
                      "comment": {},
                      "type": {
                        "type": "instrinct",
                        "name": "string"
                      }
                    },
                    {
                      "id": 768,
                      "name": "data",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {
                        "isOptional": true
                      },
                      "comment": {},
                      "type": {
                        "type": "instrinct",
                        "name": "any"
                      }
                    }
                  ],
                  "type": {
                    "type": "reference",
                    "name": "Observable",
                    "typeArguments": [
                      {
                        "type": "reference",
                        "name": "NgaAuthResult",
                        "id": 717
                      }
                    ]
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/auth/services/auth.service.ts",
                  "line": 135,
                  "character": 10
                }
              ]
            },
            {
              "id": 772,
              "name": "requestPassword",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 773,
                  "name": "requestPassword",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "comment": {
                    "shortText": "Sends forgot password request to the selected provider",
                    "text": "Example:\nrequestPassword('email', {email: 'email@example.com'})\n",
                    "returns": "\n"
                  },
                  "parameters": [
                    {
                      "id": 774,
                      "name": "provider",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {},
                      "comment": {},
                      "type": {
                        "type": "instrinct",
                        "name": "string"
                      }
                    },
                    {
                      "id": 775,
                      "name": "data",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {
                        "isOptional": true
                      },
                      "comment": {},
                      "type": {
                        "type": "instrinct",
                        "name": "any"
                      }
                    }
                  ],
                  "type": {
                    "type": "reference",
                    "name": "Observable",
                    "typeArguments": [
                      {
                        "type": "reference",
                        "name": "NgaAuthResult",
                        "id": 717
                      }
                    ]
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/auth/services/auth.service.ts",
                  "line": 173,
                  "character": 17
                }
              ]
            },
            {
              "id": 776,
              "name": "resetPassword",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 777,
                  "name": "resetPassword",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "comment": {
                    "shortText": "Tries to reset password with the selected provider",
                    "text": "Example:\nresetPassword('email', {newPassword: 'test'})\n",
                    "returns": "\n"
                  },
                  "parameters": [
                    {
                      "id": 778,
                      "name": "provider",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {},
                      "comment": {},
                      "type": {
                        "type": "instrinct",
                        "name": "string"
                      }
                    },
                    {
                      "id": 779,
                      "name": "data",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {
                        "isOptional": true
                      },
                      "comment": {},
                      "type": {
                        "type": "instrinct",
                        "name": "any"
                      }
                    }
                  ],
                  "type": {
                    "type": "reference",
                    "name": "Observable",
                    "typeArguments": [
                      {
                        "type": "reference",
                        "name": "NgaAuthResult",
                        "id": 717
                      }
                    ]
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/auth/services/auth.service.ts",
                  "line": 187,
                  "character": 15
                }
              ]
            }
          ],
          "groups": [
            {
              "title": "Constructors",
              "kind": 512,
              "children": [
                747
              ]
            },
            {
              "title": "Properties",
              "kind": 1024,
              "children": [
                748,
                749
              ]
            },
            {
              "title": "Methods",
              "kind": 2048,
              "children": [
                761,
                780,
                753,
                755,
                769,
                759,
                757,
                765,
                772,
                776
              ]
            }
          ],
          "sources": [
            {
              "fileName": "src/framework/auth/services/auth.service.ts",
              "line": 67,
              "character": 27
            }
          ]
        }
      ],
      "groups": [
        {
          "title": "Classes",
          "kind": 128,
          "children": [
            717,
            746
          ]
        }
      ],
      "sources": [
        {
          "fileName": "src/framework/auth/services/auth.service.ts",
          "line": 1,
          "character": 0
        }
      ]
    },
    {
      "id": 1002,
      "name": "\"src/framework/auth/services/secured-http\"",
      "kind": 1,
      "kindString": "External module",
      "flags": {
        "isExported": true
      },
      "originalName": "/Users/nixa/Development/Projects/Akveo/ng2-admin/src/framework/auth/services/secured-http.ts",
      "children": [
        {
          "id": 1003,
          "name": "NgaSecuredHttp",
          "kind": 128,
          "kindString": "Class",
          "flags": {
            "isExported": true
          },
          "decorators": [
            {
              "name": "Injectable",
              "type": {
                "type": "reference",
                "name": "Injectable"
              },
              "arguments": {}
            }
          ],
          "children": [
            {
              "id": 1005,
              "name": "constructor",
              "kind": 512,
              "kindString": "Constructor",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 1008,
                  "name": "new NgaSecuredHttp",
                  "kind": 16384,
                  "kindString": "Constructor signature",
                  "flags": {},
                  "parameters": [
                    {
                      "id": 1009,
                      "name": "injector",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {},
                      "type": {
                        "type": "reference",
                        "name": "Injector"
                      }
                    },
                    {
                      "id": 1010,
                      "name": "http",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {},
                      "type": {
                        "type": "reference",
                        "name": "Http"
                      }
                    }
                  ],
                  "type": {
                    "type": "reference",
                    "name": "NgaSecuredHttp",
                    "id": 1003
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/auth/services/secured-http.ts",
                  "line": 15,
                  "character": 48
                }
              ]
            },
            {
              "id": 1007,
              "name": "http",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isPrivate": true,
                "isConstructorProperty": true,
                "isExported": true
              },
              "sources": [
                {
                  "fileName": "src/framework/auth/services/secured-http.ts",
                  "line": 18,
                  "character": 26
                }
              ],
              "type": {
                "type": "reference",
                "name": "Http"
              }
            },
            {
              "id": 1006,
              "name": "injector",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isPrivate": true,
                "isConstructorProperty": true,
                "isExported": true
              },
              "sources": [
                {
                  "fileName": "src/framework/auth/services/secured-http.ts",
                  "line": 17,
                  "character": 30
                }
              ],
              "type": {
                "type": "reference",
                "name": "Injector"
              }
            },
            {
              "id": 1004,
              "name": "onErrorSubject",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isExported": true,
                "isProtected": true
              },
              "sources": [
                {
                  "fileName": "src/framework/auth/services/secured-http.ts",
                  "line": 15,
                  "character": 26
                }
              ],
              "type": {
                "type": "reference",
                "name": "Subject",
                "typeArguments": [
                  {
                    "type": "instrinct",
                    "name": "any"
                  }
                ]
              },
              "defaultValue": " new Subject<any>()"
            },
            {
              "id": 1041,
              "name": "authService",
              "kind": 262144,
              "kindString": "Accessor",
              "flags": {
                "isPrivate": true,
                "isExported": true
              },
              "getSignature": [
                {
                  "id": 1042,
                  "name": "__get",
                  "kind": 524288,
                  "kindString": "Get signature",
                  "flags": {},
                  "type": {
                    "type": "reference",
                    "name": "NgaAuthService",
                    "id": 746
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/auth/services/secured-http.ts",
                  "line": 66,
                  "character": 25
                }
              ]
            },
            {
              "id": 1037,
              "name": "addAuthTokenHeader",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isPrivate": true,
                "isExported": true
              },
              "signatures": [
                {
                  "id": 1038,
                  "name": "addAuthTokenHeader",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "parameters": [
                    {
                      "id": 1039,
                      "name": "headers",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {},
                      "type": {
                        "type": "reference",
                        "name": "Headers"
                      }
                    },
                    {
                      "id": 1040,
                      "name": "token",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {},
                      "type": {
                        "type": "instrinct",
                        "name": "string"
                      }
                    }
                  ],
                  "type": {
                    "type": "instrinct",
                    "name": "void"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/auth/services/secured-http.ts",
                  "line": 62,
                  "character": 28
                }
              ]
            },
            {
              "id": 1025,
              "name": "delete",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 1026,
                  "name": "delete",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "parameters": [
                    {
                      "id": 1027,
                      "name": "url",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {},
                      "type": {
                        "type": "instrinct",
                        "name": "string"
                      }
                    },
                    {
                      "id": 1028,
                      "name": "options",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {},
                      "type": {
                        "type": "reference",
                        "name": "RequestOptionsArgs"
                      },
                      "defaultValue": " {}"
                    }
                  ],
                  "type": {
                    "type": "reference",
                    "name": "Observable",
                    "typeArguments": [
                      {
                        "type": "reference",
                        "name": "Response"
                      }
                    ]
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/auth/services/secured-http.ts",
                  "line": 36,
                  "character": 8
                }
              ]
            },
            {
              "id": 1034,
              "name": "doRequest",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isPrivate": true,
                "isExported": true
              },
              "signatures": [
                {
                  "id": 1035,
                  "name": "doRequest",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "parameters": [
                    {
                      "id": 1036,
                      "name": "requestObservable",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {},
                      "type": {
                        "type": "reference",
                        "name": "Observable",
                        "typeArguments": [
                          {
                            "type": "reference",
                            "name": "Response"
                          }
                        ]
                      }
                    }
                  ],
                  "type": {
                    "type": "reference",
                    "name": "Observable",
                    "typeArguments": [
                      {
                        "type": "reference",
                        "name": "Response"
                      }
                    ]
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/auth/services/secured-http.ts",
                  "line": 54,
                  "character": 19
                }
              ]
            },
            {
              "id": 1011,
              "name": "get",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 1012,
                  "name": "get",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "parameters": [
                    {
                      "id": 1013,
                      "name": "url",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {},
                      "type": {
                        "type": "instrinct",
                        "name": "string"
                      }
                    },
                    {
                      "id": 1014,
                      "name": "options",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {},
                      "type": {
                        "type": "reference",
                        "name": "RequestOptionsArgs"
                      },
                      "defaultValue": " {}"
                    }
                  ],
                  "type": {
                    "type": "reference",
                    "name": "Observable",
                    "typeArguments": [
                      {
                        "type": "reference",
                        "name": "Response"
                      }
                    ]
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/auth/services/secured-http.ts",
                  "line": 21,
                  "character": 5
                }
              ]
            },
            {
              "id": 1029,
              "name": "onRequestError",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 1030,
                  "name": "onRequestError",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "type": {
                    "type": "reference",
                    "name": "Observable",
                    "typeArguments": [
                      {
                        "type": "instrinct",
                        "name": "any"
                      }
                    ]
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/auth/services/secured-http.ts",
                  "line": 41,
                  "character": 16
                }
              ]
            },
            {
              "id": 1015,
              "name": "post",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 1016,
                  "name": "post",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "parameters": [
                    {
                      "id": 1017,
                      "name": "url",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {},
                      "type": {
                        "type": "instrinct",
                        "name": "string"
                      }
                    },
                    {
                      "id": 1018,
                      "name": "body",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {},
                      "type": {
                        "type": "instrinct",
                        "name": "any"
                      }
                    },
                    {
                      "id": 1019,
                      "name": "options",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {},
                      "type": {
                        "type": "reference",
                        "name": "RequestOptionsArgs"
                      },
                      "defaultValue": " {}"
                    }
                  ],
                  "type": {
                    "type": "reference",
                    "name": "Observable",
                    "typeArguments": [
                      {
                        "type": "reference",
                        "name": "Response"
                      }
                    ]
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/auth/services/secured-http.ts",
                  "line": 26,
                  "character": 6
                }
              ]
            },
            {
              "id": 1031,
              "name": "prepareOptions",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isPrivate": true,
                "isExported": true
              },
              "signatures": [
                {
                  "id": 1032,
                  "name": "prepareOptions",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "parameters": [
                    {
                      "id": 1033,
                      "name": "options",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {},
                      "type": {
                        "type": "reference",
                        "name": "RequestOptionsArgs"
                      },
                      "defaultValue": " {}"
                    }
                  ],
                  "type": {
                    "type": "reference",
                    "name": "Observable",
                    "typeArguments": [
                      {
                        "type": "reference",
                        "name": "RequestOptionsArgs"
                      }
                    ]
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/auth/services/secured-http.ts",
                  "line": 45,
                  "character": 24
                }
              ]
            },
            {
              "id": 1020,
              "name": "put",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 1021,
                  "name": "put",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "parameters": [
                    {
                      "id": 1022,
                      "name": "url",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {},
                      "type": {
                        "type": "instrinct",
                        "name": "string"
                      }
                    },
                    {
                      "id": 1023,
                      "name": "body",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {},
                      "type": {
                        "type": "instrinct",
                        "name": "any"
                      }
                    },
                    {
                      "id": 1024,
                      "name": "options",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {},
                      "type": {
                        "type": "reference",
                        "name": "RequestOptionsArgs"
                      },
                      "defaultValue": " {}"
                    }
                  ],
                  "type": {
                    "type": "reference",
                    "name": "Observable",
                    "typeArguments": [
                      {
                        "type": "reference",
                        "name": "Response"
                      }
                    ]
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/auth/services/secured-http.ts",
                  "line": 31,
                  "character": 5
                }
              ]
            }
          ],
          "groups": [
            {
              "title": "Constructors",
              "kind": 512,
              "children": [
                1005
              ]
            },
            {
              "title": "Properties",
              "kind": 1024,
              "children": [
                1007,
                1006,
                1004
              ]
            },
            {
              "title": "Accessors",
              "kind": 262144,
              "children": [
                1041
              ]
            },
            {
              "title": "Methods",
              "kind": 2048,
              "children": [
                1037,
                1025,
                1034,
                1011,
                1029,
                1015,
                1031,
                1020
              ]
            }
          ],
          "sources": [
            {
              "fileName": "src/framework/auth/services/secured-http.ts",
              "line": 13,
              "character": 27
            }
          ]
        }
      ],
      "groups": [
        {
          "title": "Classes",
          "kind": 128,
          "children": [
            1003
          ]
        }
      ],
      "sources": [
        {
          "fileName": "src/framework/auth/services/secured-http.ts",
          "line": 1,
          "character": 0
        }
      ]
    },
    {
      "id": 679,
      "name": "\"src/framework/auth/services/token.service\"",
      "kind": 1,
      "kindString": "External module",
      "flags": {
        "isExported": true
      },
      "originalName": "/Users/nixa/Development/Projects/Akveo/ng2-admin/src/framework/auth/services/token.service.ts",
      "children": [
        {
          "id": 680,
          "name": "NgaTokenService",
          "kind": 128,
          "kindString": "Class",
          "flags": {
            "isExported": true
          },
          "decorators": [
            {
              "name": "Injectable",
              "type": {
                "type": "reference",
                "name": "Injectable"
              },
              "arguments": {}
            }
          ],
          "children": [
            {
              "id": 694,
              "name": "constructor",
              "kind": 512,
              "kindString": "Constructor",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 696,
                  "name": "new NgaTokenService",
                  "kind": 16384,
                  "kindString": "Constructor signature",
                  "flags": {},
                  "parameters": [
                    {
                      "id": 697,
                      "name": "options",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {},
                      "decorators": [
                        {
                          "name": "Inject",
                          "type": {
                            "type": "reference",
                            "name": "Inject"
                          },
                          "arguments": {
                            "token": "ngaAuthOptionsToken"
                          }
                        }
                      ],
                      "type": {
                        "type": "instrinct",
                        "name": "any"
                      }
                    }
                  ],
                  "type": {
                    "type": "reference",
                    "name": "NgaTokenService",
                    "id": 680
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/auth/services/token.service.ts",
                  "line": 20,
                  "character": 69
                }
              ]
            },
            {
              "id": 692,
              "name": "config",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isExported": true,
                "isProtected": true
              },
              "sources": [
                {
                  "fileName": "src/framework/auth/services/token.service.ts",
                  "line": 18,
                  "character": 18
                }
              ],
              "type": {
                "type": "instrinct",
                "name": "any"
              }
            },
            {
              "id": 695,
              "name": "options",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isConstructorProperty": true,
                "isExported": true,
                "isProtected": true
              },
              "decorators": [
                {
                  "name": "Inject",
                  "type": {
                    "type": "reference",
                    "name": "Inject"
                  },
                  "arguments": {
                    "token": "ngaAuthOptionsToken"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/auth/services/token.service.ts",
                  "line": 22,
                  "character": 60
                }
              ],
              "type": {
                "type": "instrinct",
                "name": "any"
              }
            },
            {
              "id": 693,
              "name": "token$",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isExported": true,
                "isProtected": true
              },
              "sources": [
                {
                  "fileName": "src/framework/auth/services/token.service.ts",
                  "line": 20,
                  "character": 18
                }
              ],
              "type": {
                "type": "reference",
                "name": "BehaviorSubject",
                "typeArguments": [
                  {
                    "type": "instrinct",
                    "name": "any"
                  }
                ]
              },
              "defaultValue": " new BehaviorSubject(null)"
            },
            {
              "id": 711,
              "name": "clear",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 712,
                  "name": "clear",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "type": {
                    "type": "reference",
                    "name": "Observable",
                    "typeArguments": [
                      {
                        "type": "instrinct",
                        "name": "any"
                      }
                    ]
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/auth/services/token.service.ts",
                  "line": 49,
                  "character": 7
                }
              ]
            },
            {
              "id": 707,
              "name": "get",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 708,
                  "name": "get",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "type": {
                    "type": "reference",
                    "name": "Observable",
                    "typeArguments": [
                      {
                        "type": "instrinct",
                        "name": "any"
                      }
                    ]
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/auth/services/token.service.ts",
                  "line": 41,
                  "character": 5
                }
              ]
            },
            {
              "id": 701,
              "name": "getConfigValue",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 702,
                  "name": "getConfigValue",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "parameters": [
                    {
                      "id": 703,
                      "name": "key",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {},
                      "type": {
                        "type": "instrinct",
                        "name": "string"
                      }
                    }
                  ],
                  "type": {
                    "type": "instrinct",
                    "name": "any"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/auth/services/token.service.ts",
                  "line": 32,
                  "character": 16
                }
              ]
            },
            {
              "id": 713,
              "name": "publishToken",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isExported": true,
                "isProtected": true
              },
              "signatures": [
                {
                  "id": 714,
                  "name": "publishToken",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "parameters": [
                    {
                      "id": 715,
                      "name": "token",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {},
                      "type": {
                        "type": "instrinct",
                        "name": "any"
                      }
                    }
                  ],
                  "type": {
                    "type": "instrinct",
                    "name": "void"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/auth/services/token.service.ts",
                  "line": 54,
                  "character": 24
                }
              ]
            },
            {
              "id": 704,
              "name": "set",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 705,
                  "name": "set",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "parameters": [
                    {
                      "id": 706,
                      "name": "token",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {},
                      "type": {
                        "type": "instrinct",
                        "name": "any"
                      }
                    }
                  ],
                  "type": {
                    "type": "reference",
                    "name": "Observable",
                    "typeArguments": [
                      {
                        "type": "instrinct",
                        "name": "any"
                      }
                    ]
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/auth/services/token.service.ts",
                  "line": 36,
                  "character": 5
                }
              ]
            },
            {
              "id": 698,
              "name": "setConfig",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 699,
                  "name": "setConfig",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "parameters": [
                    {
                      "id": 700,
                      "name": "config",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {},
                      "type": {
                        "type": "instrinct",
                        "name": "any"
                      }
                    }
                  ],
                  "type": {
                    "type": "instrinct",
                    "name": "void"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/auth/services/token.service.ts",
                  "line": 28,
                  "character": 11
                }
              ]
            },
            {
              "id": 709,
              "name": "tokenChange",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 710,
                  "name": "tokenChange",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "type": {
                    "type": "reference",
                    "name": "Observable",
                    "typeArguments": [
                      {
                        "type": "instrinct",
                        "name": "any"
                      }
                    ]
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/auth/services/token.service.ts",
                  "line": 45,
                  "character": 13
                }
              ]
            },
            {
              "id": 681,
              "name": "defaultConfig",
              "kind": 2097152,
              "kindString": "Object literal",
              "flags": {
                "isExported": true,
                "isProtected": true
              },
              "children": [
                {
                  "id": 682,
                  "name": "token",
                  "kind": 2097152,
                  "kindString": "Object literal",
                  "flags": {
                    "isExported": true
                  },
                  "children": [
                    {
                      "id": 683,
                      "name": "key",
                      "kind": 32,
                      "kindString": "Variable",
                      "flags": {
                        "isExported": true
                      },
                      "sources": [
                        {
                          "fileName": "src/framework/auth/services/token.service.ts",
                          "line": 12,
                          "character": 9
                        }
                      ],
                      "type": {
                        "type": "instrinct",
                        "name": "string"
                      },
                      "defaultValue": "\"auth_app_token\""
                    },
                    {
                      "id": 689,
                      "name": "deleter",
                      "kind": 64,
                      "kindString": "Function",
                      "flags": {
                        "isExported": true
                      },
                      "signatures": [
                        {
                          "id": 690,
                          "name": "deleter",
                          "kind": 4096,
                          "kindString": "Call signature",
                          "flags": {},
                          "parameters": [
                            {
                              "id": 691,
                              "name": "token",
                              "kind": 32768,
                              "kindString": "Parameter",
                              "flags": {},
                              "type": {
                                "type": "instrinct",
                                "name": "any"
                              }
                            }
                          ],
                          "type": {
                            "type": "reference",
                            "name": "Observable",
                            "typeArguments": [
                              {
                                "type": "instrinct",
                                "name": "void"
                              }
                            ]
                          }
                        }
                      ],
                      "sources": [
                        {
                          "fileName": "src/framework/auth/services/token.service.ts",
                          "line": 15,
                          "character": 13
                        }
                      ]
                    },
                    {
                      "id": 684,
                      "name": "getter",
                      "kind": 64,
                      "kindString": "Function",
                      "flags": {
                        "isExported": true
                      },
                      "signatures": [
                        {
                          "id": 685,
                          "name": "getter",
                          "kind": 4096,
                          "kindString": "Call signature",
                          "flags": {},
                          "type": {
                            "type": "reference",
                            "name": "Observable",
                            "typeArguments": [
                              {
                                "type": "instrinct",
                                "name": "string"
                              }
                            ]
                          }
                        }
                      ],
                      "sources": [
                        {
                          "fileName": "src/framework/auth/services/token.service.ts",
                          "line": 13,
                          "character": 12
                        }
                      ]
                    },
                    {
                      "id": 686,
                      "name": "setter",
                      "kind": 64,
                      "kindString": "Function",
                      "flags": {
                        "isExported": true
                      },
                      "signatures": [
                        {
                          "id": 687,
                          "name": "setter",
                          "kind": 4096,
                          "kindString": "Call signature",
                          "flags": {},
                          "parameters": [
                            {
                              "id": 688,
                              "name": "token",
                              "kind": 32768,
                              "kindString": "Parameter",
                              "flags": {},
                              "type": {
                                "type": "instrinct",
                                "name": "any"
                              }
                            }
                          ],
                          "type": {
                            "type": "reference",
                            "name": "Observable",
                            "typeArguments": [
                              {
                                "type": "instrinct",
                                "name": "void"
                              }
                            ]
                          }
                        }
                      ],
                      "sources": [
                        {
                          "fileName": "src/framework/auth/services/token.service.ts",
                          "line": 14,
                          "character": 12
                        }
                      ]
                    }
                  ],
                  "groups": [
                    {
                      "title": "Variables",
                      "kind": 32,
                      "children": [
                        683
                      ]
                    },
                    {
                      "title": "Functions",
                      "kind": 64,
                      "children": [
                        689,
                        684,
                        686
                      ]
                    }
                  ],
                  "sources": [
                    {
                      "fileName": "src/framework/auth/services/token.service.ts",
                      "line": 11,
                      "character": 9
                    }
                  ],
                  "type": {
                    "type": "instrinct",
                    "name": "object"
                  }
                }
              ],
              "groups": [
                {
                  "title": "Object literals",
                  "kind": 2097152,
                  "children": [
                    682
                  ]
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/auth/services/token.service.ts",
                  "line": 10,
                  "character": 25
                }
              ],
              "type": {
                "type": "instrinct",
                "name": "object"
              }
            }
          ],
          "groups": [
            {
              "title": "Constructors",
              "kind": 512,
              "children": [
                694
              ]
            },
            {
              "title": "Properties",
              "kind": 1024,
              "children": [
                692,
                695,
                693
              ]
            },
            {
              "title": "Methods",
              "kind": 2048,
              "children": [
                711,
                707,
                701,
                713,
                704,
                698,
                709
              ]
            },
            {
              "title": "Object literals",
              "kind": 2097152,
              "children": [
                681
              ]
            }
          ],
          "sources": [
            {
              "fileName": "src/framework/auth/services/token.service.ts",
              "line": 8,
              "character": 28
            }
          ]
        }
      ],
      "groups": [
        {
          "title": "Classes",
          "kind": 128,
          "children": [
            680
          ]
        }
      ],
      "sources": [
        {
          "fileName": "src/framework/auth/services/token.service.ts",
          "line": 1,
          "character": 0
        }
      ]
    },
    {
      "id": 93,
      "name": "\"src/framework/theme/components/card/card.component\"",
      "kind": 1,
      "kindString": "External module",
      "flags": {
        "isExported": true
      },
      "originalName": "/Users/nixa/Development/Projects/Akveo/ng2-admin/src/framework/theme/components/card/card.component.ts",
      "children": [
        {
          "id": 95,
          "name": "NgaCardBodyComponent",
          "kind": 128,
          "kindString": "Class",
          "flags": {
            "isExported": true
          },
          "comment": {
            "shortText": "Component intended to be used within  the `<nga-card>` component.\nIt adds styles for a preset body section."
          },
          "decorators": [
            {
              "name": "Component",
              "type": {
                "type": "reference",
                "name": "Component"
              },
              "arguments": {
                "obj": "{\n  selector: 'nga-card-body',\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  template: `<ng-content></ng-content>`,\n}"
              }
            }
          ],
          "sources": [
            {
              "fileName": "src/framework/theme/components/card/card.component.ts",
              "line": 29,
              "character": 33
            }
          ]
        },
        {
          "id": 97,
          "name": "NgaCardComponent",
          "kind": 128,
          "kindString": "Class",
          "flags": {
            "isExported": true
          },
          "comment": {
            "shortText": "A basic content container component",
            "text": "While this component can be used alone, it also provides a number\nof child components for common card sections, including:\n- nga-card-header\n- nga-card-body\n- nga-card-footer\n"
          },
          "decorators": [
            {
              "name": "Component",
              "type": {
                "type": "reference",
                "name": "Component"
              },
              "arguments": {
                "obj": "{\n  selector: 'nga-card',\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  styleUrls: ['./card.component.scss'],\n  template: `\n    <ng-content></ng-content>\n    <ng-content select=\"nga-card-header\"></ng-content>\n    <ng-content select=\"nga-card-body\"></ng-content>\n    <ng-content select=\"nga-card-footer\"></ng-content>\n  `,\n}"
              }
            }
          ],
          "children": [
            {
              "id": 111,
              "name": "sizeValue",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isPrivate": true,
                "isExported": true
              },
              "sources": [
                {
                  "fileName": "src/framework/theme/components/card/card.component.ts",
                  "line": 81,
                  "character": 19
                }
              ],
              "type": {
                "type": "instrinct",
                "name": "string"
              }
            },
            {
              "id": 112,
              "name": "statusValue",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isPrivate": true,
                "isExported": true
              },
              "sources": [
                {
                  "fileName": "src/framework/theme/components/card/card.component.ts",
                  "line": 82,
                  "character": 21
                }
              ],
              "type": {
                "type": "instrinct",
                "name": "string"
              }
            },
            {
              "id": 98,
              "name": "title",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isExported": true
              },
              "sources": [
                {
                  "fileName": "src/framework/theme/components/card/card.component.ts",
                  "line": 65,
                  "character": 7
                }
              ],
              "type": {
                "type": "instrinct",
                "name": "string"
              },
              "defaultValue": "\"nga-card\""
            },
            {
              "id": 103,
              "name": "SIZE_LARGE",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isStatic": true,
                "isExported": true
              },
              "sources": [
                {
                  "fileName": "src/framework/theme/components/card/card.component.ts",
                  "line": 71,
                  "character": 28
                }
              ],
              "type": {
                "type": "stringLiteral",
                "value": "large"
              },
              "defaultValue": "\"large\""
            },
            {
              "id": 101,
              "name": "SIZE_MEDIUM",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isStatic": true,
                "isExported": true
              },
              "sources": [
                {
                  "fileName": "src/framework/theme/components/card/card.component.ts",
                  "line": 69,
                  "character": 29
                }
              ],
              "type": {
                "type": "stringLiteral",
                "value": "medium"
              },
              "defaultValue": "\"medium\""
            },
            {
              "id": 99,
              "name": "SIZE_SMALL",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isStatic": true,
                "isExported": true
              },
              "sources": [
                {
                  "fileName": "src/framework/theme/components/card/card.component.ts",
                  "line": 67,
                  "character": 28
                }
              ],
              "type": {
                "type": "stringLiteral",
                "value": "small"
              },
              "defaultValue": "\"small\""
            },
            {
              "id": 102,
              "name": "SIZE_XMEDIUM",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isStatic": true,
                "isExported": true
              },
              "sources": [
                {
                  "fileName": "src/framework/theme/components/card/card.component.ts",
                  "line": 70,
                  "character": 30
                }
              ],
              "type": {
                "type": "stringLiteral",
                "value": "xmedium"
              },
              "defaultValue": "\"xmedium\""
            },
            {
              "id": 100,
              "name": "SIZE_XSMALL",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isStatic": true,
                "isExported": true
              },
              "sources": [
                {
                  "fileName": "src/framework/theme/components/card/card.component.ts",
                  "line": 68,
                  "character": 29
                }
              ],
              "type": {
                "type": "stringLiteral",
                "value": "xsmall"
              },
              "defaultValue": "\"xsmall\""
            },
            {
              "id": 104,
              "name": "STATUS_ACTIVE",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isStatic": true,
                "isExported": true
              },
              "sources": [
                {
                  "fileName": "src/framework/theme/components/card/card.component.ts",
                  "line": 73,
                  "character": 31
                }
              ],
              "type": {
                "type": "stringLiteral",
                "value": "active"
              },
              "defaultValue": "\"active\""
            },
            {
              "id": 110,
              "name": "STATUS_DANGER",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isStatic": true,
                "isExported": true
              },
              "sources": [
                {
                  "fileName": "src/framework/theme/components/card/card.component.ts",
                  "line": 79,
                  "character": 31
                }
              ],
              "type": {
                "type": "stringLiteral",
                "value": "danger"
              },
              "defaultValue": "\"danger\""
            },
            {
              "id": 105,
              "name": "STATUS_DISABLED",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isStatic": true,
                "isExported": true
              },
              "sources": [
                {
                  "fileName": "src/framework/theme/components/card/card.component.ts",
                  "line": 74,
                  "character": 33
                }
              ],
              "type": {
                "type": "stringLiteral",
                "value": "disabled"
              },
              "defaultValue": "\"disabled\""
            },
            {
              "id": 107,
              "name": "STATUS_INFO",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isStatic": true,
                "isExported": true
              },
              "sources": [
                {
                  "fileName": "src/framework/theme/components/card/card.component.ts",
                  "line": 76,
                  "character": 29
                }
              ],
              "type": {
                "type": "stringLiteral",
                "value": "info"
              },
              "defaultValue": "\"info\""
            },
            {
              "id": 106,
              "name": "STATUS_PRIMARY",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isStatic": true,
                "isExported": true
              },
              "sources": [
                {
                  "fileName": "src/framework/theme/components/card/card.component.ts",
                  "line": 75,
                  "character": 32
                }
              ],
              "type": {
                "type": "stringLiteral",
                "value": "primary"
              },
              "defaultValue": "\"primary\""
            },
            {
              "id": 108,
              "name": "STATUS_SUCCESS",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isStatic": true,
                "isExported": true
              },
              "sources": [
                {
                  "fileName": "src/framework/theme/components/card/card.component.ts",
                  "line": 77,
                  "character": 32
                }
              ],
              "type": {
                "type": "stringLiteral",
                "value": "success"
              },
              "defaultValue": "\"success\""
            },
            {
              "id": 109,
              "name": "STATUS_WARNING",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isStatic": true,
                "isExported": true
              },
              "sources": [
                {
                  "fileName": "src/framework/theme/components/card/card.component.ts",
                  "line": 78,
                  "character": 32
                }
              ],
              "type": {
                "type": "stringLiteral",
                "value": "warning"
              },
              "defaultValue": "\"warning\""
            },
            {
              "id": 123,
              "name": "active",
              "kind": 262144,
              "kindString": "Accessor",
              "flags": {
                "isExported": true
              },
              "decorators": [
                {
                  "name": "HostBinding",
                  "type": {
                    "type": "reference",
                    "name": "HostBinding"
                  },
                  "arguments": {
                    "hostPropertyName": "'class.active-card'"
                  }
                }
              ],
              "getSignature": [
                {
                  "id": 124,
                  "name": "__get",
                  "kind": 524288,
                  "kindString": "Get signature",
                  "flags": {},
                  "type": {
                    "type": "instrinct",
                    "name": "boolean"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/theme/components/card/card.component.ts",
                  "line": 110,
                  "character": 12
                }
              ]
            },
            {
              "id": 135,
              "name": "danger",
              "kind": 262144,
              "kindString": "Accessor",
              "flags": {
                "isExported": true
              },
              "decorators": [
                {
                  "name": "HostBinding",
                  "type": {
                    "type": "reference",
                    "name": "HostBinding"
                  },
                  "arguments": {
                    "hostPropertyName": "'class.danger-card'"
                  }
                }
              ],
              "getSignature": [
                {
                  "id": 136,
                  "name": "__get",
                  "kind": 524288,
                  "kindString": "Get signature",
                  "flags": {},
                  "type": {
                    "type": "instrinct",
                    "name": "boolean"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/theme/components/card/card.component.ts",
                  "line": 140,
                  "character": 12
                }
              ]
            },
            {
              "id": 125,
              "name": "disabled",
              "kind": 262144,
              "kindString": "Accessor",
              "flags": {
                "isExported": true
              },
              "decorators": [
                {
                  "name": "HostBinding",
                  "type": {
                    "type": "reference",
                    "name": "HostBinding"
                  },
                  "arguments": {
                    "hostPropertyName": "'class.disabled-card'"
                  }
                }
              ],
              "getSignature": [
                {
                  "id": 126,
                  "name": "__get",
                  "kind": 524288,
                  "kindString": "Get signature",
                  "flags": {},
                  "type": {
                    "type": "instrinct",
                    "name": "boolean"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/theme/components/card/card.component.ts",
                  "line": 115,
                  "character": 14
                }
              ]
            },
            {
              "id": 129,
              "name": "info",
              "kind": 262144,
              "kindString": "Accessor",
              "flags": {
                "isExported": true
              },
              "decorators": [
                {
                  "name": "HostBinding",
                  "type": {
                    "type": "reference",
                    "name": "HostBinding"
                  },
                  "arguments": {
                    "hostPropertyName": "'class.info-card'"
                  }
                }
              ],
              "getSignature": [
                {
                  "id": 130,
                  "name": "__get",
                  "kind": 524288,
                  "kindString": "Get signature",
                  "flags": {},
                  "type": {
                    "type": "instrinct",
                    "name": "boolean"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/theme/components/card/card.component.ts",
                  "line": 125,
                  "character": 10
                }
              ]
            },
            {
              "id": 121,
              "name": "large",
              "kind": 262144,
              "kindString": "Accessor",
              "flags": {
                "isExported": true
              },
              "decorators": [
                {
                  "name": "HostBinding",
                  "type": {
                    "type": "reference",
                    "name": "HostBinding"
                  },
                  "arguments": {
                    "hostPropertyName": "'class.large-card'"
                  }
                }
              ],
              "getSignature": [
                {
                  "id": 122,
                  "name": "__get",
                  "kind": 524288,
                  "kindString": "Get signature",
                  "flags": {},
                  "type": {
                    "type": "instrinct",
                    "name": "boolean"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/theme/components/card/card.component.ts",
                  "line": 105,
                  "character": 11
                }
              ]
            },
            {
              "id": 117,
              "name": "medium",
              "kind": 262144,
              "kindString": "Accessor",
              "flags": {
                "isExported": true
              },
              "decorators": [
                {
                  "name": "HostBinding",
                  "type": {
                    "type": "reference",
                    "name": "HostBinding"
                  },
                  "arguments": {
                    "hostPropertyName": "'class.medium-card'"
                  }
                }
              ],
              "getSignature": [
                {
                  "id": 118,
                  "name": "__get",
                  "kind": 524288,
                  "kindString": "Get signature",
                  "flags": {},
                  "type": {
                    "type": "instrinct",
                    "name": "boolean"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/theme/components/card/card.component.ts",
                  "line": 95,
                  "character": 12
                }
              ]
            },
            {
              "id": 127,
              "name": "primary",
              "kind": 262144,
              "kindString": "Accessor",
              "flags": {
                "isExported": true
              },
              "decorators": [
                {
                  "name": "HostBinding",
                  "type": {
                    "type": "reference",
                    "name": "HostBinding"
                  },
                  "arguments": {
                    "hostPropertyName": "'class.primary-card'"
                  }
                }
              ],
              "getSignature": [
                {
                  "id": 128,
                  "name": "__get",
                  "kind": 524288,
                  "kindString": "Get signature",
                  "flags": {},
                  "type": {
                    "type": "instrinct",
                    "name": "boolean"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/theme/components/card/card.component.ts",
                  "line": 120,
                  "character": 13
                }
              ]
            },
            {
              "id": 137,
              "name": "size",
              "kind": 262144,
              "kindString": "Accessor",
              "flags": {
                "isExported": true
              },
              "decorators": [
                {
                  "name": "Input",
                  "type": {
                    "type": "reference",
                    "name": "Input"
                  },
                  "arguments": {}
                }
              ],
              "setSignature": [
                {
                  "id": 138,
                  "name": "__set",
                  "kind": 1048576,
                  "kindString": "Set signature",
                  "flags": {},
                  "parameters": [
                    {
                      "id": 139,
                      "name": "val",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {},
                      "type": {
                        "type": "instrinct",
                        "name": "string"
                      }
                    }
                  ],
                  "type": {
                    "type": "instrinct",
                    "name": "void"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/theme/components/card/card.component.ts",
                  "line": 145,
                  "character": 10
                }
              ]
            },
            {
              "id": 113,
              "name": "small",
              "kind": 262144,
              "kindString": "Accessor",
              "flags": {
                "isExported": true
              },
              "decorators": [
                {
                  "name": "HostBinding",
                  "type": {
                    "type": "reference",
                    "name": "HostBinding"
                  },
                  "arguments": {
                    "hostPropertyName": "'class.small-card'"
                  }
                }
              ],
              "getSignature": [
                {
                  "id": 114,
                  "name": "__get",
                  "kind": 524288,
                  "kindString": "Get signature",
                  "flags": {},
                  "type": {
                    "type": "instrinct",
                    "name": "boolean"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/theme/components/card/card.component.ts",
                  "line": 85,
                  "character": 11
                }
              ]
            },
            {
              "id": 140,
              "name": "status",
              "kind": 262144,
              "kindString": "Accessor",
              "flags": {
                "isExported": true
              },
              "decorators": [
                {
                  "name": "Input",
                  "type": {
                    "type": "reference",
                    "name": "Input"
                  },
                  "arguments": {}
                }
              ],
              "setSignature": [
                {
                  "id": 141,
                  "name": "__set",
                  "kind": 1048576,
                  "kindString": "Set signature",
                  "flags": {},
                  "parameters": [
                    {
                      "id": 142,
                      "name": "val",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {},
                      "type": {
                        "type": "instrinct",
                        "name": "string"
                      }
                    }
                  ],
                  "type": {
                    "type": "instrinct",
                    "name": "void"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/theme/components/card/card.component.ts",
                  "line": 150,
                  "character": 12
                }
              ]
            },
            {
              "id": 131,
              "name": "success",
              "kind": 262144,
              "kindString": "Accessor",
              "flags": {
                "isExported": true
              },
              "decorators": [
                {
                  "name": "HostBinding",
                  "type": {
                    "type": "reference",
                    "name": "HostBinding"
                  },
                  "arguments": {
                    "hostPropertyName": "'class.success-card'"
                  }
                }
              ],
              "getSignature": [
                {
                  "id": 132,
                  "name": "__get",
                  "kind": 524288,
                  "kindString": "Get signature",
                  "flags": {},
                  "type": {
                    "type": "instrinct",
                    "name": "boolean"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/theme/components/card/card.component.ts",
                  "line": 130,
                  "character": 13
                }
              ]
            },
            {
              "id": 133,
              "name": "warning",
              "kind": 262144,
              "kindString": "Accessor",
              "flags": {
                "isExported": true
              },
              "decorators": [
                {
                  "name": "HostBinding",
                  "type": {
                    "type": "reference",
                    "name": "HostBinding"
                  },
                  "arguments": {
                    "hostPropertyName": "'class.warning-card'"
                  }
                }
              ],
              "getSignature": [
                {
                  "id": 134,
                  "name": "__get",
                  "kind": 524288,
                  "kindString": "Get signature",
                  "flags": {},
                  "type": {
                    "type": "instrinct",
                    "name": "boolean"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/theme/components/card/card.component.ts",
                  "line": 135,
                  "character": 13
                }
              ]
            },
            {
              "id": 119,
              "name": "xmedium",
              "kind": 262144,
              "kindString": "Accessor",
              "flags": {
                "isExported": true
              },
              "decorators": [
                {
                  "name": "HostBinding",
                  "type": {
                    "type": "reference",
                    "name": "HostBinding"
                  },
                  "arguments": {
                    "hostPropertyName": "'class.xmedium-card'"
                  }
                }
              ],
              "getSignature": [
                {
                  "id": 120,
                  "name": "__get",
                  "kind": 524288,
                  "kindString": "Get signature",
                  "flags": {},
                  "type": {
                    "type": "instrinct",
                    "name": "boolean"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/theme/components/card/card.component.ts",
                  "line": 100,
                  "character": 13
                }
              ]
            },
            {
              "id": 115,
              "name": "xsmall",
              "kind": 262144,
              "kindString": "Accessor",
              "flags": {
                "isExported": true
              },
              "decorators": [
                {
                  "name": "HostBinding",
                  "type": {
                    "type": "reference",
                    "name": "HostBinding"
                  },
                  "arguments": {
                    "hostPropertyName": "'class.xsmall-card'"
                  }
                }
              ],
              "getSignature": [
                {
                  "id": 116,
                  "name": "__get",
                  "kind": 524288,
                  "kindString": "Get signature",
                  "flags": {},
                  "type": {
                    "type": "instrinct",
                    "name": "boolean"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/theme/components/card/card.component.ts",
                  "line": 90,
                  "character": 12
                }
              ]
            }
          ],
          "groups": [
            {
              "title": "Properties",
              "kind": 1024,
              "children": [
                111,
                112,
                98,
                103,
                101,
                99,
                102,
                100,
                104,
                110,
                105,
                107,
                106,
                108,
                109
              ]
            },
            {
              "title": "Accessors",
              "kind": 262144,
              "children": [
                123,
                135,
                125,
                129,
                121,
                117,
                127,
                137,
                113,
                140,
                131,
                133,
                119,
                115
              ]
            }
          ],
          "sources": [
            {
              "fileName": "src/framework/theme/components/card/card.component.ts",
              "line": 64,
              "character": 29
            }
          ]
        },
        {
          "id": 96,
          "name": "NgaCardFooterComponent",
          "kind": 128,
          "kindString": "Class",
          "flags": {
            "isExported": true
          },
          "comment": {
            "shortText": "Component intended to be used within  the `<nga-card>` component.\nIt adds styles for a preset footer section."
          },
          "decorators": [
            {
              "name": "Component",
              "type": {
                "type": "reference",
                "name": "Component"
              },
              "arguments": {
                "obj": "{\n  selector: 'nga-card-footer',\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  template: `<ng-content></ng-content>`,\n}"
              }
            }
          ],
          "sources": [
            {
              "fileName": "src/framework/theme/components/card/card.component.ts",
              "line": 41,
              "character": 35
            }
          ]
        },
        {
          "id": 94,
          "name": "NgaCardHeaderComponent",
          "kind": 128,
          "kindString": "Class",
          "flags": {
            "isExported": true
          },
          "comment": {
            "shortText": "Component intended to be used within  the `<nga-card>` component.\nIt adds styles for a preset header section."
          },
          "decorators": [
            {
              "name": "Component",
              "type": {
                "type": "reference",
                "name": "Component"
              },
              "arguments": {
                "obj": "{\n  selector: 'nga-card-header',\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  template: `<ng-content></ng-content>`,\n}"
              }
            }
          ],
          "sources": [
            {
              "fileName": "src/framework/theme/components/card/card.component.ts",
              "line": 17,
              "character": 35
            }
          ]
        }
      ],
      "groups": [
        {
          "title": "Classes",
          "kind": 128,
          "children": [
            95,
            97,
            96,
            94
          ]
        }
      ],
      "sources": [
        {
          "fileName": "src/framework/theme/components/card/card.component.ts",
          "line": 1,
          "character": 0
        }
      ]
    },
    {
      "id": 143,
      "name": "\"src/framework/theme/components/card/card.module\"",
      "kind": 1,
      "kindString": "External module",
      "flags": {
        "isExported": true
      },
      "originalName": "/Users/nixa/Development/Projects/Akveo/ng2-admin/src/framework/theme/components/card/card.module.ts",
      "children": [
        {
          "id": 144,
          "name": "NgaCardModule",
          "kind": 128,
          "kindString": "Class",
          "flags": {
            "isExported": true
          },
          "decorators": [
            {
              "name": "NgModule",
              "type": {
                "type": "reference",
                "name": "NgModule"
              },
              "arguments": {
                "obj": "{\n  imports: [\n    NgaSharedModule,\n  ],\n  declarations: [\n    ...NGA_CARD_COMPONENTS,\n  ],\n  exports: [\n    ...NGA_CARD_COMPONENTS,\n  ],\n}"
              }
            }
          ],
          "sources": [
            {
              "fileName": "src/framework/theme/components/card/card.module.ts",
              "line": 35,
              "character": 26
            }
          ]
        },
        {
          "id": 145,
          "name": "NGA_CARD_COMPONENTS",
          "kind": 32,
          "kindString": "Variable",
          "flags": {},
          "sources": [
            {
              "fileName": "src/framework/theme/components/card/card.module.ts",
              "line": 17,
              "character": 25
            }
          ],
          "type": {
            "type": "reference",
            "name": "Array",
            "typeArguments": [
              {
                "type": "reference",
                "name": "NgaCardBodyComponent",
                "id": 95
              }
            ]
          },
          "defaultValue": " [\n  NgaCardComponent,\n  NgaCardBodyComponent,\n  NgaCardFooterComponent,\n  NgaCardHeaderComponent,\n]"
        }
      ],
      "groups": [
        {
          "title": "Classes",
          "kind": 128,
          "children": [
            144
          ]
        },
        {
          "title": "Variables",
          "kind": 32,
          "children": [
            145
          ]
        }
      ],
      "sources": [
        {
          "fileName": "src/framework/theme/components/card/card.module.ts",
          "line": 1,
          "character": 0
        }
      ]
    },
    {
      "id": 146,
      "name": "\"src/framework/theme/components/helpers\"",
      "kind": 1,
      "kindString": "External module",
      "flags": {
        "isExported": true
      },
      "originalName": "/Users/nixa/Development/Projects/Akveo/ng2-admin/src/framework/theme/components/helpers.ts",
      "children": [
        {
          "id": 147,
          "name": "convertToBoolProperty",
          "kind": 64,
          "kindString": "Function",
          "flags": {
            "isExported": true
          },
          "signatures": [
            {
              "id": 148,
              "name": "convertToBoolProperty",
              "kind": 4096,
              "kindString": "Call signature",
              "flags": {},
              "comment": {
                "tags": [
                  {
                    "tag": "license",
                    "text": "\nCopyright Akveo. All Rights Reserved.\nLicensed under the MIT License. See License.txt in the project root for license information.\n"
                  }
                ]
              },
              "parameters": [
                {
                  "id": 149,
                  "name": "val",
                  "kind": 32768,
                  "kindString": "Parameter",
                  "flags": {},
                  "type": {
                    "type": "instrinct",
                    "name": "any"
                  }
                }
              ],
              "type": {
                "type": "instrinct",
                "name": "boolean"
              }
            }
          ],
          "sources": [
            {
              "fileName": "src/framework/theme/components/helpers.ts",
              "line": 6,
              "character": 37
            }
          ]
        }
      ],
      "groups": [
        {
          "title": "Functions",
          "kind": 64,
          "children": [
            147
          ]
        }
      ],
      "sources": [
        {
          "fileName": "src/framework/theme/components/helpers.ts",
          "line": 1,
          "character": 0
        }
      ]
    },
    {
      "id": 150,
      "name": "\"src/framework/theme/components/layout/layout.component\"",
      "kind": 1,
      "kindString": "External module",
      "flags": {
        "isExported": true
      },
      "originalName": "/Users/nixa/Development/Projects/Akveo/ng2-admin/src/framework/theme/components/layout/layout.component.ts",
      "children": [
        {
          "id": 151,
          "name": "NgaLayoutColumnComponent",
          "kind": 128,
          "kindString": "Class",
          "flags": {
            "isExported": true
          },
          "comment": {
            "shortText": "Component intended to be used within  the `<nga-layout>` component.\nIt adds styles for a preset column section."
          },
          "decorators": [
            {
              "name": "Component",
              "type": {
                "type": "reference",
                "name": "Component"
              },
              "arguments": {
                "obj": "{\n  selector: 'nga-layout-column',\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  template: `\n    <ng-content></ng-content>\n  `,\n}"
              }
            }
          ],
          "children": [
            {
              "id": 152,
              "name": "leftValue",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isExported": true
              },
              "decorators": [
                {
                  "name": "HostBinding",
                  "type": {
                    "type": "reference",
                    "name": "HostBinding"
                  },
                  "arguments": {
                    "hostPropertyName": "'class.left'"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/theme/components/layout/layout.component.ts",
                  "line": 32,
                  "character": 38
                }
              ],
              "type": {
                "type": "instrinct",
                "name": "boolean"
              }
            },
            {
              "id": 153,
              "name": "left",
              "kind": 262144,
              "kindString": "Accessor",
              "flags": {
                "isExported": true
              },
              "decorators": [
                {
                  "name": "Input",
                  "type": {
                    "type": "reference",
                    "name": "Input"
                  },
                  "arguments": {}
                }
              ],
              "setSignature": [
                {
                  "id": 154,
                  "name": "__set",
                  "kind": 1048576,
                  "kindString": "Set signature",
                  "flags": {},
                  "parameters": [
                    {
                      "id": 155,
                      "name": "val",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {},
                      "type": {
                        "type": "instrinct",
                        "name": "boolean"
                      }
                    }
                  ],
                  "type": {
                    "type": "instrinct",
                    "name": "void"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/theme/components/layout/layout.component.ts",
                  "line": 35,
                  "character": 10
                }
              ]
            }
          ],
          "groups": [
            {
              "title": "Properties",
              "kind": 1024,
              "children": [
                152
              ]
            },
            {
              "title": "Accessors",
              "kind": 262144,
              "children": [
                153
              ]
            }
          ],
          "sources": [
            {
              "fileName": "src/framework/theme/components/layout/layout.component.ts",
              "line": 30,
              "character": 37
            }
          ]
        },
        {
          "id": 166,
          "name": "NgaLayoutComponent",
          "kind": 128,
          "kindString": "Class",
          "flags": {
            "isExported": true
          },
          "comment": {
            "shortText": "A basic content container component",
            "text": "While this component can be used alone, it also provides a number\nof child components for common layout sections, including:\n- nga-sidebar\n- nga-layout-column\n- nga-layout-content\n- nga-layout-header\n- nga-layout-footer\n"
          },
          "decorators": [
            {
              "name": "Component",
              "type": {
                "type": "reference",
                "name": "Component"
              },
              "arguments": {
                "obj": "{\n  selector: 'nga-layout',\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  styleUrls: ['./layout.component.scss'],\n  template: `\n    <div class=\"layout\">\n      <ng-content select=\"nga-layout-header\"></ng-content>\n      <div class=\"layout-container\">\n        <ng-content select=\"nga-sidebar\"></ng-content>\n        <ng-content select=\"nga-sidebar[left]\"></ng-content>\n        <div class=\"content\" [class.center]=\"centerValue\">\n          <div class=\"columns\">\n            <ng-content select=\"nga-layout-column\"></ng-content>\n          </div>\n          <ng-content select=\"nga-layout-footer\"></ng-content>\n        </div>\n        <ng-content select=\"nga-sidebar[right]\"></ng-content>\n      </div>\n    </div>\n  `,\n}"
              }
            }
          ],
          "children": [
            {
              "id": 172,
              "name": "constructor",
              "kind": 512,
              "kindString": "Constructor",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 176,
                  "name": "new NgaLayoutComponent",
                  "kind": 16384,
                  "kindString": "Constructor signature",
                  "flags": {},
                  "parameters": [
                    {
                      "id": 177,
                      "name": "themeService",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {},
                      "type": {
                        "type": "reference",
                        "name": "NgaThemeService",
                        "id": 74
                      }
                    },
                    {
                      "id": 178,
                      "name": "elementRef",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {},
                      "type": {
                        "type": "reference",
                        "name": "ElementRef"
                      }
                    },
                    {
                      "id": 179,
                      "name": "renderer",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {},
                      "type": {
                        "type": "reference",
                        "name": "Renderer2"
                      }
                    }
                  ],
                  "type": {
                    "type": "reference",
                    "name": "NgaLayoutComponent",
                    "id": 166
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/theme/components/layout/layout.component.ts",
                  "line": 130,
                  "character": 44
                }
              ]
            },
            {
              "id": 167,
              "name": "centerValue",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isExported": true
              },
              "decorators": [
                {
                  "name": "HostBinding",
                  "type": {
                    "type": "reference",
                    "name": "HostBinding"
                  },
                  "arguments": {
                    "hostPropertyName": "'class.center'"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/theme/components/layout/layout.component.ts",
                  "line": 123,
                  "character": 42
                }
              ],
              "type": {
                "type": "instrinct",
                "name": "boolean"
              },
              "defaultValue": "false"
            },
            {
              "id": 174,
              "name": "elementRef",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isConstructorProperty": true,
                "isExported": true,
                "isProtected": true
              },
              "sources": [
                {
                  "fileName": "src/framework/theme/components/layout/layout.component.ts",
                  "line": 133,
                  "character": 34
                }
              ],
              "type": {
                "type": "reference",
                "name": "ElementRef"
              }
            },
            {
              "id": 175,
              "name": "renderer",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isConstructorProperty": true,
                "isExported": true,
                "isProtected": true
              },
              "sources": [
                {
                  "fileName": "src/framework/theme/components/layout/layout.component.ts",
                  "line": 134,
                  "character": 32
                }
              ],
              "type": {
                "type": "reference",
                "name": "Renderer2"
              }
            },
            {
              "id": 173,
              "name": "themeService",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isConstructorProperty": true,
                "isExported": true,
                "isProtected": true
              },
              "sources": [
                {
                  "fileName": "src/framework/theme/components/layout/layout.component.ts",
                  "line": 132,
                  "character": 36
                }
              ],
              "type": {
                "type": "reference",
                "name": "NgaThemeService",
                "id": 74
              }
            },
            {
              "id": 171,
              "name": "themeSubscription",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isExported": true,
                "isProtected": true
              },
              "sources": [
                {
                  "fileName": "src/framework/theme/components/layout/layout.component.ts",
                  "line": 130,
                  "character": 29
                }
              ],
              "type": {
                "type": "reference",
                "name": "Subscription"
              }
            },
            {
              "id": 168,
              "name": "center",
              "kind": 262144,
              "kindString": "Accessor",
              "flags": {
                "isExported": true
              },
              "decorators": [
                {
                  "name": "Input",
                  "type": {
                    "type": "reference",
                    "name": "Input"
                  },
                  "arguments": {}
                }
              ],
              "setSignature": [
                {
                  "id": 169,
                  "name": "__set",
                  "kind": 1048576,
                  "kindString": "Set signature",
                  "flags": {},
                  "parameters": [
                    {
                      "id": 170,
                      "name": "val",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {},
                      "type": {
                        "type": "instrinct",
                        "name": "boolean"
                      }
                    }
                  ],
                  "type": {
                    "type": "instrinct",
                    "name": "void"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/theme/components/layout/layout.component.ts",
                  "line": 126,
                  "character": 12
                }
              ]
            },
            {
              "id": 180,
              "name": "ngOnDestroy",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 181,
                  "name": "ngOnDestroy",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "type": {
                    "type": "instrinct",
                    "name": "void"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/theme/components/layout/layout.component.ts",
                  "line": 144,
                  "character": 13
                }
              ]
            }
          ],
          "groups": [
            {
              "title": "Constructors",
              "kind": 512,
              "children": [
                172
              ]
            },
            {
              "title": "Properties",
              "kind": 1024,
              "children": [
                167,
                174,
                175,
                173,
                171
              ]
            },
            {
              "title": "Accessors",
              "kind": 262144,
              "children": [
                168
              ]
            },
            {
              "title": "Methods",
              "kind": 2048,
              "children": [
                180
              ]
            }
          ],
          "sources": [
            {
              "fileName": "src/framework/theme/components/layout/layout.component.ts",
              "line": 120,
              "character": 31
            }
          ],
          "implementedTypes": [
            {
              "type": "reference",
              "name": "OnDestroy"
            }
          ]
        },
        {
          "id": 161,
          "name": "NgaLayoutFooterComponent",
          "kind": 128,
          "kindString": "Class",
          "flags": {
            "isExported": true
          },
          "comment": {
            "shortText": "Component intended to be used within  the `<nga-layout>` component.\nIt adds styles for a preset footer section."
          },
          "decorators": [
            {
              "name": "Component",
              "type": {
                "type": "reference",
                "name": "Component"
              },
              "arguments": {
                "obj": "{\n  selector: 'nga-layout-footer',\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  template: `\n    <nav [class.fixed]=\"fixedValue\">\n      <ng-content></ng-content>\n    </nav>\n  `,\n}"
              }
            }
          ],
          "children": [
            {
              "id": 162,
              "name": "fixedValue",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isExported": true
              },
              "decorators": [
                {
                  "name": "HostBinding",
                  "type": {
                    "type": "reference",
                    "name": "HostBinding"
                  },
                  "arguments": {
                    "hostPropertyName": "'class.fixed'"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/theme/components/layout/layout.component.ts",
                  "line": 79,
                  "character": 40
                }
              ],
              "type": {
                "type": "instrinct",
                "name": "boolean"
              }
            },
            {
              "id": 163,
              "name": "fixed",
              "kind": 262144,
              "kindString": "Accessor",
              "flags": {
                "isExported": true
              },
              "decorators": [
                {
                  "name": "Input",
                  "type": {
                    "type": "reference",
                    "name": "Input"
                  },
                  "arguments": {}
                }
              ],
              "setSignature": [
                {
                  "id": 164,
                  "name": "__set",
                  "kind": 1048576,
                  "kindString": "Set signature",
                  "flags": {},
                  "parameters": [
                    {
                      "id": 165,
                      "name": "val",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {},
                      "type": {
                        "type": "instrinct",
                        "name": "boolean"
                      }
                    }
                  ],
                  "type": {
                    "type": "instrinct",
                    "name": "void"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/theme/components/layout/layout.component.ts",
                  "line": 82,
                  "character": 11
                }
              ]
            }
          ],
          "groups": [
            {
              "title": "Properties",
              "kind": 1024,
              "children": [
                162
              ]
            },
            {
              "title": "Accessors",
              "kind": 262144,
              "children": [
                163
              ]
            }
          ],
          "sources": [
            {
              "fileName": "src/framework/theme/components/layout/layout.component.ts",
              "line": 77,
              "character": 37
            }
          ]
        },
        {
          "id": 156,
          "name": "NgaLayoutHeaderComponent",
          "kind": 128,
          "kindString": "Class",
          "flags": {
            "isExported": true
          },
          "comment": {
            "shortText": "Component intended to be used within  the `<nga-layout>` component.\nIt adds styles for a preset header section."
          },
          "decorators": [
            {
              "name": "Component",
              "type": {
                "type": "reference",
                "name": "Component"
              },
              "arguments": {
                "obj": "{\n  selector: 'nga-layout-header',\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  template: `\n    <nav [class.fixed]=\"fixedValue\">\n      <ng-content></ng-content>\n    </nav>\n  `,\n}"
              }
            }
          ],
          "children": [
            {
              "id": 157,
              "name": "fixedValue",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isExported": true
              },
              "decorators": [
                {
                  "name": "HostBinding",
                  "type": {
                    "type": "reference",
                    "name": "HostBinding"
                  },
                  "arguments": {
                    "hostPropertyName": "'class.fixed'"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/theme/components/layout/layout.component.ts",
                  "line": 55,
                  "character": 40
                }
              ],
              "type": {
                "type": "instrinct",
                "name": "boolean"
              }
            },
            {
              "id": 158,
              "name": "fixed",
              "kind": 262144,
              "kindString": "Accessor",
              "flags": {
                "isExported": true
              },
              "decorators": [
                {
                  "name": "Input",
                  "type": {
                    "type": "reference",
                    "name": "Input"
                  },
                  "arguments": {}
                }
              ],
              "setSignature": [
                {
                  "id": 159,
                  "name": "__set",
                  "kind": 1048576,
                  "kindString": "Set signature",
                  "flags": {},
                  "parameters": [
                    {
                      "id": 160,
                      "name": "val",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {},
                      "type": {
                        "type": "instrinct",
                        "name": "boolean"
                      }
                    }
                  ],
                  "type": {
                    "type": "instrinct",
                    "name": "void"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/theme/components/layout/layout.component.ts",
                  "line": 58,
                  "character": 11
                }
              ]
            }
          ],
          "groups": [
            {
              "title": "Properties",
              "kind": 1024,
              "children": [
                157
              ]
            },
            {
              "title": "Accessors",
              "kind": 262144,
              "children": [
                158
              ]
            }
          ],
          "sources": [
            {
              "fileName": "src/framework/theme/components/layout/layout.component.ts",
              "line": 53,
              "character": 37
            }
          ]
        }
      ],
      "groups": [
        {
          "title": "Classes",
          "kind": 128,
          "children": [
            151,
            166,
            161,
            156
          ]
        }
      ],
      "sources": [
        {
          "fileName": "src/framework/theme/components/layout/layout.component.ts",
          "line": 1,
          "character": 0
        }
      ]
    },
    {
      "id": 182,
      "name": "\"src/framework/theme/components/layout/layout.module\"",
      "kind": 1,
      "kindString": "External module",
      "flags": {
        "isExported": true
      },
      "originalName": "/Users/nixa/Development/Projects/Akveo/ng2-admin/src/framework/theme/components/layout/layout.module.ts",
      "children": [
        {
          "id": 183,
          "name": "NgaLayoutModule",
          "kind": 128,
          "kindString": "Class",
          "flags": {
            "isExported": true
          },
          "decorators": [
            {
              "name": "NgModule",
              "type": {
                "type": "reference",
                "name": "NgModule"
              },
              "arguments": {
                "obj": "{\n  imports: [\n    NgaSharedModule,\n  ],\n  declarations: [\n    ...NGA_LAYOUT_COMPONENTS,\n  ],\n  exports: [\n    ...NGA_LAYOUT_COMPONENTS,\n  ],\n}"
              }
            }
          ],
          "sources": [
            {
              "fileName": "src/framework/theme/components/layout/layout.module.ts",
              "line": 35,
              "character": 28
            }
          ]
        },
        {
          "id": 184,
          "name": "NGA_LAYOUT_COMPONENTS",
          "kind": 32,
          "kindString": "Variable",
          "flags": {},
          "sources": [
            {
              "fileName": "src/framework/theme/components/layout/layout.module.ts",
              "line": 17,
              "character": 27
            }
          ],
          "type": {
            "type": "reference",
            "name": "Array",
            "typeArguments": [
              {
                "type": "union",
                "types": [
                  {
                    "type": "reference",
                    "name": "NgaLayoutComponent",
                    "id": 166
                  },
                  {
                    "type": "reference",
                    "name": "NgaLayoutColumnComponent",
                    "id": 151
                  },
                  {
                    "type": "reference",
                    "name": "NgaLayoutFooterComponent",
                    "id": 161
                  }
                ]
              }
            ]
          },
          "defaultValue": " [\n  NgaLayoutComponent,\n  NgaLayoutColumnComponent,\n  NgaLayoutFooterComponent,\n  NgaLayoutHeaderComponent,\n]"
        }
      ],
      "groups": [
        {
          "title": "Classes",
          "kind": 128,
          "children": [
            183
          ]
        },
        {
          "title": "Variables",
          "kind": 32,
          "children": [
            184
          ]
        }
      ],
      "sources": [
        {
          "fileName": "src/framework/theme/components/layout/layout.module.ts",
          "line": 1,
          "character": 0
        }
      ]
    },
    {
      "id": 244,
      "name": "\"src/framework/theme/components/menu/menu.component\"",
      "kind": 1,
      "kindString": "External module",
      "flags": {
        "isExported": true
      },
      "originalName": "/Users/nixa/Development/Projects/Akveo/ng2-admin/src/framework/theme/components/menu/menu.component.ts",
      "children": [
        {
          "id": 269,
          "name": "NgaMenuComponent",
          "kind": 128,
          "kindString": "Class",
          "flags": {
            "isExported": true
          },
          "decorators": [
            {
              "name": "Component",
              "type": {
                "type": "reference",
                "name": "Component"
              },
              "arguments": {
                "obj": "{\n  selector: 'nga-menu',\n  styleUrls: ['./menu.component.scss'],\n  template: `\n    <ul>\n      <li ngaMenuItem *ngFor=\"let item of menuItems\"\n                      [menuItem]=\"item\"\n                      (hoverItem)=\"onHoverItem($event)\"\n                      (toggleSubMenu)=\"onToggleSubMenu($event)\"\n                      (selectItem)=\"onSelectItem($event)\"\n                      (itemClick)=\"onItemClick($event)\"></li>\n    </ul>\n  `,\n}"
              }
            }
          ],
          "children": [
            {
              "id": 275,
              "name": "constructor",
              "kind": 512,
              "kindString": "Constructor",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 278,
                  "name": "new NgaMenuComponent",
                  "kind": 16384,
                  "kindString": "Constructor signature",
                  "flags": {},
                  "parameters": [
                    {
                      "id": 279,
                      "name": "menuService",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {},
                      "type": {
                        "type": "reference",
                        "name": "NgaMenuService",
                        "id": 186
                      }
                    },
                    {
                      "id": 280,
                      "name": "router",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {},
                      "type": {
                        "type": "reference",
                        "name": "Router"
                      }
                    }
                  ],
                  "type": {
                    "type": "reference",
                    "name": "NgaMenuComponent",
                    "id": 269
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/theme/components/menu/menu.component.ts",
                  "line": 78,
                  "character": 38
                }
              ]
            },
            {
              "id": 271,
              "name": "hoverItem",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isExported": true
              },
              "decorators": [
                {
                  "name": "Output",
                  "type": {
                    "type": "reference",
                    "name": "Output"
                  },
                  "arguments": {}
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/theme/components/menu/menu.component.ts",
                  "line": 73,
                  "character": 21
                }
              ],
              "type": {
                "type": "reference",
                "name": "EventEmitter",
                "typeArguments": [
                  {
                    "type": "instrinct",
                    "name": "any"
                  }
                ]
              },
              "defaultValue": " new EventEmitter<any>()"
            },
            {
              "id": 273,
              "name": "menuItems",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isExported": true
              },
              "sources": [
                {
                  "fileName": "src/framework/theme/components/menu/menu.component.ts",
                  "line": 76,
                  "character": 11
                }
              ],
              "type": {
                "type": "reference",
                "name": "List",
                "typeArguments": [
                  {
                    "type": "reference",
                    "name": "NgaMenuItem",
                    "id": 58
                  }
                ]
              }
            },
            {
              "id": 276,
              "name": "menuService",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isPrivate": true,
                "isConstructorProperty": true,
                "isExported": true
              },
              "sources": [
                {
                  "fileName": "src/framework/theme/components/menu/menu.component.ts",
                  "line": 80,
                  "character": 33
                }
              ],
              "type": {
                "type": "reference",
                "name": "NgaMenuService",
                "id": 186
              }
            },
            {
              "id": 277,
              "name": "router",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isPrivate": true,
                "isConstructorProperty": true,
                "isExported": true
              },
              "sources": [
                {
                  "fileName": "src/framework/theme/components/menu/menu.component.ts",
                  "line": 80,
                  "character": 65
                }
              ],
              "type": {
                "type": "reference",
                "name": "Router"
              }
            },
            {
              "id": 274,
              "name": "stack",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isPrivate": true,
                "isExported": true
              },
              "sources": [
                {
                  "fileName": "src/framework/theme/components/menu/menu.component.ts",
                  "line": 78,
                  "character": 15
                }
              ],
              "type": {
                "type": "reference",
                "name": "List",
                "typeArguments": [
                  {
                    "type": "reference",
                    "name": "NgaMenuItem",
                    "id": 58
                  }
                ]
              },
              "defaultValue": " List<NgaMenuItem>()"
            },
            {
              "id": 270,
              "name": "tag",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isExported": true
              },
              "decorators": [
                {
                  "name": "Input",
                  "type": {
                    "type": "reference",
                    "name": "Input"
                  },
                  "arguments": {}
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/theme/components/menu/menu.component.ts",
                  "line": 71,
                  "character": 14
                }
              ],
              "type": {
                "type": "instrinct",
                "name": "string"
              }
            },
            {
              "id": 272,
              "name": "toggleSubMenu",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isExported": true
              },
              "decorators": [
                {
                  "name": "Output",
                  "type": {
                    "type": "reference",
                    "name": "Output"
                  },
                  "arguments": {}
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/theme/components/menu/menu.component.ts",
                  "line": 74,
                  "character": 25
                }
              ],
              "type": {
                "type": "reference",
                "name": "EventEmitter",
                "typeArguments": [
                  {
                    "type": "instrinct",
                    "name": "any"
                  }
                ]
              },
              "defaultValue": " new EventEmitter<any>()"
            },
            {
              "id": 297,
              "name": "getHomeItem",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isPrivate": true,
                "isExported": true
              },
              "signatures": [
                {
                  "id": 298,
                  "name": "getHomeItem",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "parameters": [
                    {
                      "id": 299,
                      "name": "parent",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {},
                      "type": {
                        "type": "reference",
                        "name": "NgaMenuItem",
                        "id": 58
                      }
                    }
                  ],
                  "type": {
                    "type": "reference",
                    "name": "NgaMenuItem",
                    "id": 58
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/theme/components/menu/menu.component.ts",
                  "line": 161,
                  "character": 21
                }
              ]
            },
            {
              "id": 295,
              "name": "navigateHome",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isPrivate": true,
                "isExported": true
              },
              "signatures": [
                {
                  "id": 296,
                  "name": "navigateHome",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "type": {
                    "type": "instrinct",
                    "name": "void"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/theme/components/menu/menu.component.ts",
                  "line": 133,
                  "character": 22
                }
              ]
            },
            {
              "id": 281,
              "name": "ngOnInit",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 282,
                  "name": "ngOnInit",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "type": {
                    "type": "instrinct",
                    "name": "void"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/theme/components/menu/menu.component.ts",
                  "line": 82,
                  "character": 10
                }
              ]
            },
            {
              "id": 283,
              "name": "onHoverItem",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 284,
                  "name": "onHoverItem",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "parameters": [
                    {
                      "id": 285,
                      "name": "item",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {},
                      "type": {
                        "type": "reference",
                        "name": "NgaMenuItem",
                        "id": 58
                      }
                    }
                  ],
                  "type": {
                    "type": "instrinct",
                    "name": "void"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/theme/components/menu/menu.component.ts",
                  "line": 113,
                  "character": 13
                }
              ]
            },
            {
              "id": 292,
              "name": "onItemClick",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 293,
                  "name": "onItemClick",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "parameters": [
                    {
                      "id": 294,
                      "name": "item",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {},
                      "type": {
                        "type": "reference",
                        "name": "NgaMenuItem",
                        "id": 58
                      }
                    }
                  ],
                  "type": {
                    "type": "instrinct",
                    "name": "void"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/theme/components/menu/menu.component.ts",
                  "line": 129,
                  "character": 13
                }
              ]
            },
            {
              "id": 289,
              "name": "onSelectItem",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 290,
                  "name": "onSelectItem",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "parameters": [
                    {
                      "id": 291,
                      "name": "item",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {},
                      "type": {
                        "type": "instrinct",
                        "name": "any"
                      }
                    }
                  ],
                  "type": {
                    "type": "instrinct",
                    "name": "void"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/theme/components/menu/menu.component.ts",
                  "line": 123,
                  "character": 14
                }
              ]
            },
            {
              "id": 286,
              "name": "onToggleSubMenu",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 287,
                  "name": "onToggleSubMenu",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "parameters": [
                    {
                      "id": 288,
                      "name": "item",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {},
                      "type": {
                        "type": "reference",
                        "name": "NgaMenuItem",
                        "id": 58
                      }
                    }
                  ],
                  "type": {
                    "type": "instrinct",
                    "name": "void"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/theme/components/menu/menu.component.ts",
                  "line": 117,
                  "character": 17
                }
              ]
            }
          ],
          "groups": [
            {
              "title": "Constructors",
              "kind": 512,
              "children": [
                275
              ]
            },
            {
              "title": "Properties",
              "kind": 1024,
              "children": [
                271,
                273,
                276,
                277,
                274,
                270,
                272
              ]
            },
            {
              "title": "Methods",
              "kind": 2048,
              "children": [
                297,
                295,
                281,
                283,
                292,
                289,
                286
              ]
            }
          ],
          "sources": [
            {
              "fileName": "src/framework/theme/components/menu/menu.component.ts",
              "line": 69,
              "character": 29
            }
          ],
          "implementedTypes": [
            {
              "type": "reference",
              "name": "OnInit"
            }
          ]
        },
        {
          "id": 245,
          "name": "NgaMenuItemComponent",
          "kind": 128,
          "kindString": "Class",
          "flags": {
            "isExported": true
          },
          "decorators": [
            {
              "name": "Component",
              "type": {
                "type": "reference",
                "name": "Component"
              },
              "arguments": {
                "obj": "{\n  // tslint:disable-next-line:component-selector\n  selector: '[ngaMenuItem]',\n  templateUrl: './menu-item.component.html',\n}"
              }
            }
          ],
          "children": [
            {
              "id": 251,
              "name": "constructor",
              "kind": 512,
              "kindString": "Constructor",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 254,
                  "name": "new NgaMenuItemComponent",
                  "kind": 16384,
                  "kindString": "Constructor signature",
                  "flags": {},
                  "parameters": [
                    {
                      "id": 255,
                      "name": "router",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {},
                      "type": {
                        "type": "reference",
                        "name": "Router"
                      }
                    },
                    {
                      "id": 256,
                      "name": "menuService",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {},
                      "type": {
                        "type": "reference",
                        "name": "NgaMenuService",
                        "id": 186
                      }
                    }
                  ],
                  "type": {
                    "type": "reference",
                    "name": "NgaMenuItemComponent",
                    "id": 245
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/theme/components/menu/menu.component.ts",
                  "line": 33,
                  "character": 48
                }
              ]
            },
            {
              "id": 247,
              "name": "hoverItem",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isExported": true
              },
              "decorators": [
                {
                  "name": "Output",
                  "type": {
                    "type": "reference",
                    "name": "Output"
                  },
                  "arguments": {}
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/theme/components/menu/menu.component.ts",
                  "line": 30,
                  "character": 21
                }
              ],
              "type": {
                "type": "reference",
                "name": "EventEmitter",
                "typeArguments": [
                  {
                    "type": "instrinct",
                    "name": "any"
                  }
                ]
              },
              "defaultValue": " new EventEmitter<any>()"
            },
            {
              "id": 250,
              "name": "itemClick",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isExported": true
              },
              "decorators": [
                {
                  "name": "Output",
                  "type": {
                    "type": "reference",
                    "name": "Output"
                  },
                  "arguments": {}
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/theme/components/menu/menu.component.ts",
                  "line": 33,
                  "character": 21
                }
              ],
              "type": {
                "type": "reference",
                "name": "EventEmitter",
                "typeArguments": [
                  {
                    "type": "instrinct",
                    "name": "any"
                  }
                ]
              },
              "defaultValue": " new EventEmitter<any>()"
            },
            {
              "id": 246,
              "name": "menuItem",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isExported": true
              },
              "decorators": [
                {
                  "name": "Input",
                  "type": {
                    "type": "reference",
                    "name": "Input"
                  },
                  "arguments": {}
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/theme/components/menu/menu.component.ts",
                  "line": 28,
                  "character": 19
                }
              ],
              "type": {
                "type": "reference",
                "name": "NgaMenuItem",
                "id": 58
              }
            },
            {
              "id": 253,
              "name": "menuService",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isPrivate": true,
                "isConstructorProperty": true,
                "isExported": true
              },
              "sources": [
                {
                  "fileName": "src/framework/theme/components/menu/menu.component.ts",
                  "line": 35,
                  "character": 57
                }
              ],
              "type": {
                "type": "reference",
                "name": "NgaMenuService",
                "id": 186
              }
            },
            {
              "id": 252,
              "name": "router",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isPrivate": true,
                "isConstructorProperty": true,
                "isExported": true
              },
              "sources": [
                {
                  "fileName": "src/framework/theme/components/menu/menu.component.ts",
                  "line": 35,
                  "character": 28
                }
              ],
              "type": {
                "type": "reference",
                "name": "Router"
              }
            },
            {
              "id": 249,
              "name": "selectItem",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isExported": true
              },
              "decorators": [
                {
                  "name": "Output",
                  "type": {
                    "type": "reference",
                    "name": "Output"
                  },
                  "arguments": {}
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/theme/components/menu/menu.component.ts",
                  "line": 32,
                  "character": 22
                }
              ],
              "type": {
                "type": "reference",
                "name": "EventEmitter",
                "typeArguments": [
                  {
                    "type": "instrinct",
                    "name": "any"
                  }
                ]
              },
              "defaultValue": " new EventEmitter<any>()"
            },
            {
              "id": 248,
              "name": "toggleSubMenu",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isExported": true
              },
              "decorators": [
                {
                  "name": "Output",
                  "type": {
                    "type": "reference",
                    "name": "Output"
                  },
                  "arguments": {}
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/theme/components/menu/menu.component.ts",
                  "line": 31,
                  "character": 25
                }
              ],
              "type": {
                "type": "reference",
                "name": "EventEmitter",
                "typeArguments": [
                  {
                    "type": "instrinct",
                    "name": "any"
                  }
                ]
              },
              "defaultValue": " new EventEmitter<any>()"
            },
            {
              "id": 260,
              "name": "onHoverItem",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 261,
                  "name": "onHoverItem",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "parameters": [
                    {
                      "id": 262,
                      "name": "item",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {},
                      "type": {
                        "type": "reference",
                        "name": "NgaMenuItem",
                        "id": 58
                      }
                    }
                  ],
                  "type": {
                    "type": "instrinct",
                    "name": "void"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/theme/components/menu/menu.component.ts",
                  "line": 41,
                  "character": 13
                }
              ]
            },
            {
              "id": 266,
              "name": "onItemClick",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 267,
                  "name": "onItemClick",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "parameters": [
                    {
                      "id": 268,
                      "name": "item",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {},
                      "type": {
                        "type": "reference",
                        "name": "NgaMenuItem",
                        "id": 58
                      }
                    }
                  ],
                  "type": {
                    "type": "instrinct",
                    "name": "void"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/theme/components/menu/menu.component.ts",
                  "line": 49,
                  "character": 13
                }
              ]
            },
            {
              "id": 263,
              "name": "onSelectItem",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 264,
                  "name": "onSelectItem",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "parameters": [
                    {
                      "id": 265,
                      "name": "item",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {},
                      "type": {
                        "type": "reference",
                        "name": "NgaMenuItem",
                        "id": 58
                      }
                    }
                  ],
                  "type": {
                    "type": "instrinct",
                    "name": "void"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/theme/components/menu/menu.component.ts",
                  "line": 45,
                  "character": 14
                }
              ]
            },
            {
              "id": 257,
              "name": "onToggleSubMenu",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 258,
                  "name": "onToggleSubMenu",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "parameters": [
                    {
                      "id": 259,
                      "name": "item",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {},
                      "type": {
                        "type": "reference",
                        "name": "NgaMenuItem",
                        "id": 58
                      }
                    }
                  ],
                  "type": {
                    "type": "instrinct",
                    "name": "void"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/theme/components/menu/menu.component.ts",
                  "line": 37,
                  "character": 17
                }
              ]
            }
          ],
          "groups": [
            {
              "title": "Constructors",
              "kind": 512,
              "children": [
                251
              ]
            },
            {
              "title": "Properties",
              "kind": 1024,
              "children": [
                247,
                250,
                246,
                253,
                252,
                249,
                248
              ]
            },
            {
              "title": "Methods",
              "kind": 2048,
              "children": [
                260,
                266,
                263,
                257
              ]
            }
          ],
          "sources": [
            {
              "fileName": "src/framework/theme/components/menu/menu.component.ts",
              "line": 26,
              "character": 33
            }
          ]
        }
      ],
      "groups": [
        {
          "title": "Classes",
          "kind": 128,
          "children": [
            269,
            245
          ]
        }
      ],
      "sources": [
        {
          "fileName": "src/framework/theme/components/menu/menu.component.ts",
          "line": 1,
          "character": 0
        }
      ]
    },
    {
      "id": 300,
      "name": "\"src/framework/theme/components/menu/menu.module\"",
      "kind": 1,
      "kindString": "External module",
      "flags": {
        "isExported": true
      },
      "originalName": "/Users/nixa/Development/Projects/Akveo/ng2-admin/src/framework/theme/components/menu/menu.module.ts",
      "children": [
        {
          "id": 301,
          "name": "NgaMenuModule",
          "kind": 128,
          "kindString": "Class",
          "flags": {
            "isExported": true
          },
          "decorators": [
            {
              "name": "NgModule",
              "type": {
                "type": "reference",
                "name": "NgModule"
              },
              "arguments": {
                "obj": "{\n  imports: [\n    NgaSharedModule,\n  ],\n  declarations: [\n    ...NGA_MENU_COMPONENTS,\n  ],\n  exports: [\n    ...NGA_MENU_COMPONENTS,\n  ],\n}"
              }
            }
          ],
          "children": [
            {
              "id": 302,
              "name": "forRoot",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isStatic": true,
                "isExported": true
              },
              "signatures": [
                {
                  "id": 303,
                  "name": "forRoot",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "parameters": [
                    {
                      "id": 304,
                      "name": "config",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {},
                      "type": {
                        "type": "reference",
                        "name": "NgaMenuModuleConfig",
                        "id": 71
                      },
                      "defaultValue": " List<NgaMenuItem>()"
                    }
                  ],
                  "type": {
                    "type": "reference",
                    "name": "ModuleWithProviders"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/theme/components/menu/menu.module.ts",
                  "line": 37,
                  "character": 16
                }
              ]
            }
          ],
          "groups": [
            {
              "title": "Methods",
              "kind": 2048,
              "children": [
                302
              ]
            }
          ],
          "sources": [
            {
              "fileName": "src/framework/theme/components/menu/menu.module.ts",
              "line": 36,
              "character": 26
            }
          ]
        },
        {
          "id": 305,
          "name": "NGA_MENU_COMPONENTS",
          "kind": 32,
          "kindString": "Variable",
          "flags": {},
          "sources": [
            {
              "fileName": "src/framework/theme/components/menu/menu.module.ts",
              "line": 16,
              "character": 25
            }
          ],
          "type": {
            "type": "reference",
            "name": "Array",
            "typeArguments": [
              {
                "type": "union",
                "types": [
                  {
                    "type": "reference",
                    "name": "NgaMenuComponent",
                    "id": 269
                  },
                  {
                    "type": "reference",
                    "name": "NgaMenuItemComponent",
                    "id": 245
                  }
                ]
              }
            ]
          },
          "defaultValue": " [\n  NgaMenuComponent,\n  NgaMenuItemComponent,\n]"
        },
        {
          "id": 306,
          "name": "NGA_MENU_PROVIDERS",
          "kind": 32,
          "kindString": "Variable",
          "flags": {},
          "sources": [
            {
              "fileName": "src/framework/theme/components/menu/menu.module.ts",
              "line": 21,
              "character": 24
            }
          ],
          "type": {
            "type": "reference",
            "name": "Array",
            "typeArguments": [
              {
                "type": "reference",
                "name": "NgaMenuService",
                "id": 186
              }
            ]
          },
          "defaultValue": " [\n  NgaMenuService,\n]"
        }
      ],
      "groups": [
        {
          "title": "Classes",
          "kind": 128,
          "children": [
            301
          ]
        },
        {
          "title": "Variables",
          "kind": 32,
          "children": [
            305,
            306
          ]
        }
      ],
      "sources": [
        {
          "fileName": "src/framework/theme/components/menu/menu.module.ts",
          "line": 1,
          "character": 0
        }
      ]
    },
    {
      "id": 57,
      "name": "\"src/framework/theme/components/menu/menu.options\"",
      "kind": 1,
      "kindString": "External module",
      "flags": {
        "isExported": true
      },
      "originalName": "/Users/nixa/Development/Projects/Akveo/ng2-admin/src/framework/theme/components/menu/menu.options.ts",
      "children": [
        {
          "id": 58,
          "name": "NgaMenuItem",
          "kind": 128,
          "kindString": "Class",
          "flags": {
            "isExported": true
          },
          "children": [
            {
              "id": 64,
              "name": "children",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isExported": true,
                "isOptional": true
              },
              "sources": [
                {
                  "fileName": "src/framework/theme/components/menu/menu.options.ts",
                  "line": 14,
                  "character": 10
                }
              ],
              "type": {
                "type": "reference",
                "name": "List",
                "typeArguments": [
                  {
                    "type": "reference",
                    "name": "NgaMenuItem",
                    "id": 58
                  }
                ]
              }
            },
            {
              "id": 63,
              "name": "expanded",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isExported": true,
                "isOptional": true
              },
              "sources": [
                {
                  "fileName": "src/framework/theme/components/menu/menu.options.ts",
                  "line": 13,
                  "character": 10
                }
              ],
              "type": {
                "type": "instrinct",
                "name": "boolean"
              },
              "defaultValue": "false"
            },
            {
              "id": 69,
              "name": "group",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isExported": true,
                "isOptional": true
              },
              "sources": [
                {
                  "fileName": "src/framework/theme/components/menu/menu.options.ts",
                  "line": 19,
                  "character": 7
                }
              ],
              "type": {
                "type": "instrinct",
                "name": "boolean"
              }
            },
            {
              "id": 66,
              "name": "hidden",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isExported": true,
                "isOptional": true
              },
              "sources": [
                {
                  "fileName": "src/framework/theme/components/menu/menu.options.ts",
                  "line": 16,
                  "character": 8
                }
              ],
              "type": {
                "type": "instrinct",
                "name": "boolean"
              },
              "defaultValue": "false"
            },
            {
              "id": 68,
              "name": "home",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isExported": true,
                "isOptional": true
              },
              "sources": [
                {
                  "fileName": "src/framework/theme/components/menu/menu.options.ts",
                  "line": 18,
                  "character": 6
                }
              ],
              "type": {
                "type": "instrinct",
                "name": "boolean"
              },
              "defaultValue": "false"
            },
            {
              "id": 62,
              "name": "icon",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isExported": true,
                "isOptional": true
              },
              "sources": [
                {
                  "fileName": "src/framework/theme/components/menu/menu.options.ts",
                  "line": 12,
                  "character": 6
                }
              ],
              "type": {
                "type": "instrinct",
                "name": "string"
              }
            },
            {
              "id": 60,
              "name": "link",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isExported": true,
                "isOptional": true
              },
              "sources": [
                {
                  "fileName": "src/framework/theme/components/menu/menu.options.ts",
                  "line": 10,
                  "character": 6
                }
              ],
              "type": {
                "type": "instrinct",
                "name": "string"
              }
            },
            {
              "id": 70,
              "name": "parent",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isExported": true,
                "isOptional": true
              },
              "sources": [
                {
                  "fileName": "src/framework/theme/components/menu/menu.options.ts",
                  "line": 20,
                  "character": 8
                }
              ],
              "type": {
                "type": "reference",
                "name": "NgaMenuItem",
                "id": 58
              }
            },
            {
              "id": 67,
              "name": "pathMath",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isExported": true,
                "isOptional": true
              },
              "sources": [
                {
                  "fileName": "src/framework/theme/components/menu/menu.options.ts",
                  "line": 17,
                  "character": 10
                }
              ],
              "type": {
                "type": "instrinct",
                "name": "string"
              },
              "defaultValue": "\"full\""
            },
            {
              "id": 65,
              "name": "target",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isExported": true,
                "isOptional": true
              },
              "sources": [
                {
                  "fileName": "src/framework/theme/components/menu/menu.options.ts",
                  "line": 15,
                  "character": 8
                }
              ],
              "type": {
                "type": "instrinct",
                "name": "string"
              }
            },
            {
              "id": 59,
              "name": "title",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isExported": true
              },
              "sources": [
                {
                  "fileName": "src/framework/theme/components/menu/menu.options.ts",
                  "line": 9,
                  "character": 7
                }
              ],
              "type": {
                "type": "instrinct",
                "name": "string"
              }
            },
            {
              "id": 61,
              "name": "url",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isExported": true,
                "isOptional": true
              },
              "sources": [
                {
                  "fileName": "src/framework/theme/components/menu/menu.options.ts",
                  "line": 11,
                  "character": 5
                }
              ],
              "type": {
                "type": "instrinct",
                "name": "string"
              }
            }
          ],
          "groups": [
            {
              "title": "Properties",
              "kind": 1024,
              "children": [
                64,
                63,
                69,
                66,
                68,
                62,
                60,
                70,
                67,
                65,
                59,
                61
              ]
            }
          ],
          "sources": [
            {
              "fileName": "src/framework/theme/components/menu/menu.options.ts",
              "line": 8,
              "character": 24
            }
          ]
        },
        {
          "id": 71,
          "name": "NgaMenuModuleConfig",
          "kind": 128,
          "kindString": "Class",
          "flags": {
            "isExported": true
          },
          "children": [
            {
              "id": 72,
              "name": "items",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isExported": true,
                "isOptional": true
              },
              "sources": [
                {
                  "fileName": "src/framework/theme/components/menu/menu.options.ts",
                  "line": 24,
                  "character": 7
                }
              ],
              "type": {
                "type": "reference",
                "name": "List",
                "typeArguments": [
                  {
                    "type": "reference",
                    "name": "NgaMenuItem",
                    "id": 58
                  }
                ]
              }
            }
          ],
          "groups": [
            {
              "title": "Properties",
              "kind": 1024,
              "children": [
                72
              ]
            }
          ],
          "sources": [
            {
              "fileName": "src/framework/theme/components/menu/menu.options.ts",
              "line": 23,
              "character": 32
            }
          ]
        }
      ],
      "groups": [
        {
          "title": "Classes",
          "kind": 128,
          "children": [
            58,
            71
          ]
        }
      ],
      "sources": [
        {
          "fileName": "src/framework/theme/components/menu/menu.options.ts",
          "line": 1,
          "character": 0
        }
      ]
    },
    {
      "id": 185,
      "name": "\"src/framework/theme/components/menu/menu.service\"",
      "kind": 1,
      "kindString": "External module",
      "flags": {
        "isExported": true
      },
      "originalName": "/Users/nixa/Development/Projects/Akveo/ng2-admin/src/framework/theme/components/menu/menu.service.ts",
      "children": [
        {
          "id": 186,
          "name": "NgaMenuService",
          "kind": 128,
          "kindString": "Class",
          "flags": {
            "isExported": true
          },
          "decorators": [
            {
              "name": "Injectable",
              "type": {
                "type": "reference",
                "name": "Injectable"
              },
              "arguments": {}
            }
          ],
          "children": [
            {
              "id": 208,
              "name": "constructor",
              "kind": 512,
              "kindString": "Constructor",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 211,
                  "name": "new NgaMenuService",
                  "kind": 16384,
                  "kindString": "Constructor signature",
                  "flags": {},
                  "parameters": [
                    {
                      "id": 212,
                      "name": "router",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {},
                      "type": {
                        "type": "reference",
                        "name": "Router"
                      }
                    },
                    {
                      "id": 213,
                      "name": "config",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {},
                      "decorators": [
                        {
                          "name": "Optional",
                          "type": {
                            "type": "reference",
                            "name": "Optional"
                          },
                          "arguments": {}
                        }
                      ],
                      "type": {
                        "type": "reference",
                        "name": "NgaMenuModuleConfig",
                        "id": 71
                      }
                    }
                  ],
                  "type": {
                    "type": "reference",
                    "name": "NgaMenuService",
                    "id": 186
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/theme/components/menu/menu.service.ts",
                  "line": 29,
                  "character": 38
                }
              ]
            },
            {
              "id": 189,
              "name": "addItems$",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isPrivate": true,
                "isExported": true
              },
              "sources": [
                {
                  "fileName": "src/framework/theme/components/menu/menu.service.ts",
                  "line": 20,
                  "character": 19
                }
              ],
              "type": {
                "type": "reference",
                "name": "Subject",
                "typeArguments": [
                  {
                    "type": "instrinct",
                    "name": "Object"
                  }
                ]
              },
              "defaultValue": " new Subject()"
            },
            {
              "id": 199,
              "name": "addItemsSuggest",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isExported": true
              },
              "sources": [
                {
                  "fileName": "src/framework/theme/components/menu/menu.service.ts",
                  "line": 25,
                  "character": 17
                }
              ],
              "type": {
                "type": "reference",
                "name": "Observable",
                "typeArguments": [
                  {
                    "type": "reflection",
                    "declaration": {
                      "id": 200,
                      "name": "__type",
                      "kind": 65536,
                      "kindString": "Type literal",
                      "flags": {},
                      "children": [
                        {
                          "id": 202,
                          "name": "items",
                          "kind": 32,
                          "kindString": "Variable",
                          "flags": {},
                          "sources": [
                            {
                              "fileName": "src/framework/theme/components/menu/menu.service.ts",
                              "line": 25,
                              "character": 50
                            }
                          ],
                          "type": {
                            "type": "reference",
                            "name": "List",
                            "typeArguments": [
                              {
                                "type": "reference",
                                "name": "NgaMenuItem",
                                "id": 58
                              }
                            ]
                          }
                        },
                        {
                          "id": 201,
                          "name": "tag",
                          "kind": 32,
                          "kindString": "Variable",
                          "flags": {},
                          "sources": [
                            {
                              "fileName": "src/framework/theme/components/menu/menu.service.ts",
                              "line": 25,
                              "character": 35
                            }
                          ],
                          "type": {
                            "type": "instrinct",
                            "name": "string"
                          }
                        }
                      ],
                      "groups": [
                        {
                          "title": "Variables",
                          "kind": 32,
                          "children": [
                            202,
                            201
                          ]
                        }
                      ],
                      "sources": [
                        {
                          "fileName": "src/framework/theme/components/menu/menu.service.ts",
                          "line": 25,
                          "character": 30
                        }
                      ]
                    }
                  }
                ]
              },
              "defaultValue": " this.addItems$.asObservable()"
            },
            {
              "id": 210,
              "name": "config",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isPrivate": true,
                "isConstructorProperty": true,
                "isExported": true
              },
              "decorators": [
                {
                  "name": "Optional",
                  "type": {
                    "type": "reference",
                    "name": "Optional"
                  },
                  "arguments": {}
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/theme/components/menu/menu.service.ts",
                  "line": 31,
                  "character": 64
                }
              ],
              "type": {
                "type": "reference",
                "name": "NgaMenuModuleConfig",
                "id": 71
              }
            },
            {
              "id": 188,
              "name": "itemClick$",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isPrivate": true,
                "isExported": true
              },
              "sources": [
                {
                  "fileName": "src/framework/theme/components/menu/menu.service.ts",
                  "line": 19,
                  "character": 20
                }
              ],
              "type": {
                "type": "reference",
                "name": "Subject",
                "typeArguments": [
                  {
                    "type": "instrinct",
                    "name": "Object"
                  }
                ]
              },
              "defaultValue": " new Subject()"
            },
            {
              "id": 195,
              "name": "itemClickSuggest",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isExported": true
              },
              "sources": [
                {
                  "fileName": "src/framework/theme/components/menu/menu.service.ts",
                  "line": 24,
                  "character": 18
                }
              ],
              "type": {
                "type": "reference",
                "name": "Observable",
                "typeArguments": [
                  {
                    "type": "reflection",
                    "declaration": {
                      "id": 196,
                      "name": "__type",
                      "kind": 65536,
                      "kindString": "Type literal",
                      "flags": {},
                      "children": [
                        {
                          "id": 198,
                          "name": "item",
                          "kind": 32,
                          "kindString": "Variable",
                          "flags": {},
                          "sources": [
                            {
                              "fileName": "src/framework/theme/components/menu/menu.service.ts",
                              "line": 24,
                              "character": 50
                            }
                          ],
                          "type": {
                            "type": "reference",
                            "name": "NgaMenuItem",
                            "id": 58
                          }
                        },
                        {
                          "id": 197,
                          "name": "tag",
                          "kind": 32,
                          "kindString": "Variable",
                          "flags": {},
                          "sources": [
                            {
                              "fileName": "src/framework/theme/components/menu/menu.service.ts",
                              "line": 24,
                              "character": 36
                            }
                          ],
                          "type": {
                            "type": "instrinct",
                            "name": "string"
                          }
                        }
                      ],
                      "groups": [
                        {
                          "title": "Variables",
                          "kind": 32,
                          "children": [
                            198,
                            197
                          ]
                        }
                      ],
                      "sources": [
                        {
                          "fileName": "src/framework/theme/components/menu/menu.service.ts",
                          "line": 24,
                          "character": 31
                        }
                      ]
                    }
                  }
                ]
              },
              "defaultValue": " this.itemClick$.asObservable()"
            },
            {
              "id": 207,
              "name": "items",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isPrivate": true,
                "isExported": true
              },
              "sources": [
                {
                  "fileName": "src/framework/theme/components/menu/menu.service.ts",
                  "line": 29,
                  "character": 15
                }
              ],
              "type": {
                "type": "reference",
                "name": "List",
                "typeArguments": [
                  {
                    "type": "reference",
                    "name": "NgaMenuItem",
                    "id": 58
                  }
                ]
              },
              "defaultValue": " List<NgaMenuItem>()"
            },
            {
              "id": 187,
              "name": "itemsChanges$",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isPrivate": true,
                "isExported": true
              },
              "sources": [
                {
                  "fileName": "src/framework/theme/components/menu/menu.service.ts",
                  "line": 18,
                  "character": 23
                }
              ],
              "type": {
                "type": "reference",
                "name": "Subject",
                "typeArguments": [
                  {
                    "type": "instrinct",
                    "name": "Object"
                  }
                ]
              },
              "defaultValue": " new Subject()"
            },
            {
              "id": 191,
              "name": "itemsChangesSuggest",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isExported": true
              },
              "sources": [
                {
                  "fileName": "src/framework/theme/components/menu/menu.service.ts",
                  "line": 23,
                  "character": 21
                }
              ],
              "type": {
                "type": "reference",
                "name": "Observable",
                "typeArguments": [
                  {
                    "type": "reflection",
                    "declaration": {
                      "id": 192,
                      "name": "__type",
                      "kind": 65536,
                      "kindString": "Type literal",
                      "flags": {},
                      "children": [
                        {
                          "id": 194,
                          "name": "items",
                          "kind": 32,
                          "kindString": "Variable",
                          "flags": {},
                          "sources": [
                            {
                              "fileName": "src/framework/theme/components/menu/menu.service.ts",
                              "line": 23,
                              "character": 54
                            }
                          ],
                          "type": {
                            "type": "reference",
                            "name": "List",
                            "typeArguments": [
                              {
                                "type": "reference",
                                "name": "NgaMenuItem",
                                "id": 58
                              }
                            ]
                          }
                        },
                        {
                          "id": 193,
                          "name": "tag",
                          "kind": 32,
                          "kindString": "Variable",
                          "flags": {},
                          "sources": [
                            {
                              "fileName": "src/framework/theme/components/menu/menu.service.ts",
                              "line": 23,
                              "character": 39
                            }
                          ],
                          "type": {
                            "type": "instrinct",
                            "name": "string"
                          }
                        }
                      ],
                      "groups": [
                        {
                          "title": "Variables",
                          "kind": 32,
                          "children": [
                            194,
                            193
                          ]
                        }
                      ],
                      "sources": [
                        {
                          "fileName": "src/framework/theme/components/menu/menu.service.ts",
                          "line": 23,
                          "character": 34
                        }
                      ]
                    }
                  }
                ]
              },
              "defaultValue": " this.itemsChanges$.asObservable()"
            },
            {
              "id": 190,
              "name": "navigateHome$",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isPrivate": true,
                "isExported": true
              },
              "sources": [
                {
                  "fileName": "src/framework/theme/components/menu/menu.service.ts",
                  "line": 21,
                  "character": 23
                }
              ],
              "type": {
                "type": "reference",
                "name": "Subject",
                "typeArguments": [
                  {
                    "type": "instrinct",
                    "name": "Object"
                  }
                ]
              },
              "defaultValue": " new Subject()"
            },
            {
              "id": 203,
              "name": "navigateHomeSuggest",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isExported": true
              },
              "sources": [
                {
                  "fileName": "src/framework/theme/components/menu/menu.service.ts",
                  "line": 26,
                  "character": 21
                }
              ],
              "type": {
                "type": "reference",
                "name": "Observable",
                "typeArguments": [
                  {
                    "type": "reflection",
                    "declaration": {
                      "id": 204,
                      "name": "__type",
                      "kind": 65536,
                      "kindString": "Type literal",
                      "flags": {},
                      "children": [
                        {
                          "id": 205,
                          "name": "tag",
                          "kind": 32,
                          "kindString": "Variable",
                          "flags": {},
                          "sources": [
                            {
                              "fileName": "src/framework/theme/components/menu/menu.service.ts",
                              "line": 26,
                              "character": 39
                            }
                          ],
                          "type": {
                            "type": "instrinct",
                            "name": "string"
                          }
                        }
                      ],
                      "groups": [
                        {
                          "title": "Variables",
                          "kind": 32,
                          "children": [
                            205
                          ]
                        }
                      ],
                      "sources": [
                        {
                          "fileName": "src/framework/theme/components/menu/menu.service.ts",
                          "line": 26,
                          "character": 34
                        }
                      ]
                    }
                  }
                ]
              },
              "defaultValue": " this.navigateHome$.asObservable()"
            },
            {
              "id": 209,
              "name": "router",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isPrivate": true,
                "isConstructorProperty": true,
                "isExported": true
              },
              "sources": [
                {
                  "fileName": "src/framework/theme/components/menu/menu.service.ts",
                  "line": 31,
                  "character": 28
                }
              ],
              "type": {
                "type": "reference",
                "name": "Router"
              }
            },
            {
              "id": 206,
              "name": "stack",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isPrivate": true,
                "isExported": true
              },
              "sources": [
                {
                  "fileName": "src/framework/theme/components/menu/menu.service.ts",
                  "line": 28,
                  "character": 15
                }
              ],
              "type": {
                "type": "reference",
                "name": "List",
                "typeArguments": [
                  {
                    "type": "reference",
                    "name": "NgaMenuItem",
                    "id": 58
                  }
                ]
              },
              "defaultValue": " List<NgaMenuItem>()"
            },
            {
              "id": 222,
              "name": "addItems",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 223,
                  "name": "addItems",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "parameters": [
                    {
                      "id": 224,
                      "name": "items",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {},
                      "type": {
                        "type": "reference",
                        "name": "List",
                        "typeArguments": [
                          {
                            "type": "reference",
                            "name": "NgaMenuItem",
                            "id": 58
                          }
                        ]
                      }
                    },
                    {
                      "id": 225,
                      "name": "tag",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {
                        "isOptional": true
                      },
                      "type": {
                        "type": "instrinct",
                        "name": "string"
                      }
                    }
                  ],
                  "type": {
                    "type": "instrinct",
                    "name": "void"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/theme/components/menu/menu.service.ts",
                  "line": 52,
                  "character": 10
                }
              ]
            },
            {
              "id": 242,
              "name": "clearStack",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isPrivate": true,
                "isExported": true
              },
              "signatures": [
                {
                  "id": 243,
                  "name": "clearStack",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "type": {
                    "type": "instrinct",
                    "name": "void"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/theme/components/menu/menu.service.ts",
                  "line": 135,
                  "character": 20
                }
              ]
            },
            {
              "id": 214,
              "name": "getItems",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 215,
                  "name": "getItems",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "type": {
                    "type": "reference",
                    "name": "List",
                    "typeArguments": [
                      {
                        "type": "reference",
                        "name": "NgaMenuItem",
                        "id": 58
                      }
                    ]
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/theme/components/menu/menu.service.ts",
                  "line": 35,
                  "character": 10
                }
              ]
            },
            {
              "id": 226,
              "name": "itemClick",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 227,
                  "name": "itemClick",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "parameters": [
                    {
                      "id": 228,
                      "name": "item",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {},
                      "type": {
                        "type": "reference",
                        "name": "NgaMenuItem",
                        "id": 58
                      }
                    },
                    {
                      "id": 229,
                      "name": "tag",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {
                        "isOptional": true
                      },
                      "type": {
                        "type": "instrinct",
                        "name": "string"
                      }
                    }
                  ],
                  "type": {
                    "type": "instrinct",
                    "name": "void"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/theme/components/menu/menu.service.ts",
                  "line": 56,
                  "character": 11
                }
              ]
            },
            {
              "id": 230,
              "name": "navigateHome",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 231,
                  "name": "navigateHome",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "parameters": [
                    {
                      "id": 232,
                      "name": "tag",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {
                        "isOptional": true
                      },
                      "type": {
                        "type": "instrinct",
                        "name": "string"
                      }
                    }
                  ],
                  "type": {
                    "type": "instrinct",
                    "name": "void"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/theme/components/menu/menu.service.ts",
                  "line": 63,
                  "character": 14
                }
              ]
            },
            {
              "id": 236,
              "name": "prepareItem",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isPrivate": true,
                "isExported": true
              },
              "signatures": [
                {
                  "id": 237,
                  "name": "prepareItem",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "parameters": [
                    {
                      "id": 238,
                      "name": "parent",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {},
                      "type": {
                        "type": "instrinct",
                        "name": "any"
                      }
                    }
                  ],
                  "type": {
                    "type": "instrinct",
                    "name": "void"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/theme/components/menu/menu.service.ts",
                  "line": 83,
                  "character": 21
                }
              ]
            },
            {
              "id": 216,
              "name": "prepareItems",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 217,
                  "name": "prepareItems",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "parameters": [
                    {
                      "id": 218,
                      "name": "items",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {},
                      "type": {
                        "type": "reference",
                        "name": "List",
                        "typeArguments": [
                          {
                            "type": "reference",
                            "name": "NgaMenuItem",
                            "id": 58
                          }
                        ]
                      }
                    }
                  ],
                  "type": {
                    "type": "instrinct",
                    "name": "void"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/theme/components/menu/menu.service.ts",
                  "line": 39,
                  "character": 14
                }
              ]
            },
            {
              "id": 239,
              "name": "resetItem",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isPrivate": true,
                "isExported": true
              },
              "signatures": [
                {
                  "id": 240,
                  "name": "resetItem",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "parameters": [
                    {
                      "id": 241,
                      "name": "parent",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {},
                      "type": {
                        "type": "instrinct",
                        "name": "any"
                      }
                    }
                  ],
                  "type": {
                    "type": "instrinct",
                    "name": "void"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/theme/components/menu/menu.service.ts",
                  "line": 115,
                  "character": 19
                }
              ]
            },
            {
              "id": 219,
              "name": "resetItems",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 220,
                  "name": "resetItems",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "parameters": [
                    {
                      "id": 221,
                      "name": "items",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {},
                      "type": {
                        "type": "reference",
                        "name": "List",
                        "typeArguments": [
                          {
                            "type": "reference",
                            "name": "NgaMenuItem",
                            "id": 58
                          }
                        ]
                      }
                    }
                  ],
                  "type": {
                    "type": "instrinct",
                    "name": "void"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/theme/components/menu/menu.service.ts",
                  "line": 46,
                  "character": 12
                }
              ]
            },
            {
              "id": 233,
              "name": "setParent",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isPrivate": true,
                "isExported": true
              },
              "signatures": [
                {
                  "id": 234,
                  "name": "setParent",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "parameters": [
                    {
                      "id": 235,
                      "name": "parent",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {},
                      "type": {
                        "type": "reference",
                        "name": "NgaMenuItem",
                        "id": 58
                      }
                    }
                  ],
                  "type": {
                    "type": "instrinct",
                    "name": "void"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/theme/components/menu/menu.service.ts",
                  "line": 67,
                  "character": 19
                }
              ]
            }
          ],
          "groups": [
            {
              "title": "Constructors",
              "kind": 512,
              "children": [
                208
              ]
            },
            {
              "title": "Properties",
              "kind": 1024,
              "children": [
                189,
                199,
                210,
                188,
                195,
                207,
                187,
                191,
                190,
                203,
                209,
                206
              ]
            },
            {
              "title": "Methods",
              "kind": 2048,
              "children": [
                222,
                242,
                214,
                226,
                230,
                236,
                216,
                239,
                219,
                233
              ]
            }
          ],
          "sources": [
            {
              "fileName": "src/framework/theme/components/menu/menu.service.ts",
              "line": 16,
              "character": 27
            }
          ]
        }
      ],
      "groups": [
        {
          "title": "Classes",
          "kind": 128,
          "children": [
            186
          ]
        }
      ],
      "sources": [
        {
          "fileName": "src/framework/theme/components/menu/menu.service.ts",
          "line": 1,
          "character": 0
        }
      ]
    },
    {
      "id": 307,
      "name": "\"src/framework/theme/components/route-tabset/route-tabset.component\"",
      "kind": 1,
      "kindString": "External module",
      "flags": {
        "isExported": true
      },
      "originalName": "/Users/nixa/Development/Projects/Akveo/ng2-admin/src/framework/theme/components/route-tabset/route-tabset.component.ts",
      "children": [
        {
          "id": 308,
          "name": "NgaRouteTabsetComponent",
          "kind": 128,
          "kindString": "Class",
          "flags": {
            "isExported": true
          },
          "decorators": [
            {
              "name": "Component",
              "type": {
                "type": "reference",
                "name": "Component"
              },
              "arguments": {
                "obj": "{\n  selector: 'nga-route-tabset',\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  styleUrls: ['./route-tabset.component.scss'],\n  template: `\n    <ul class=\"nga-route-tabset\">\n      <li *ngFor=\"let tab of tabs\"\n      (click)=\"$event.preventDefault();selectTab(tab)\"\n      routerLink=\"{{tab.route}}\"\n      routerLinkActive=\"active\"\n      [routerLinkActiveOptions]=\"{ exact: true }\">\n        <a href>{{tab.title}}</a>\n      </li>\n    </ul>\n    <router-outlet></router-outlet>\n  `,\n}"
              }
            }
          ],
          "children": [
            {
              "id": 315,
              "name": "constructor",
              "kind": 512,
              "kindString": "Constructor",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 317,
                  "name": "new NgaRouteTabsetComponent",
                  "kind": 16384,
                  "kindString": "Constructor signature",
                  "flags": {},
                  "parameters": [
                    {
                      "id": 318,
                      "name": "router",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {},
                      "type": {
                        "type": "reference",
                        "name": "Router"
                      }
                    }
                  ],
                  "type": {
                    "type": "reference",
                    "name": "NgaRouteTabsetComponent",
                    "id": 308
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/theme/components/route-tabset/route-tabset.component.ts",
                  "line": 39,
                  "character": 48
                }
              ]
            },
            {
              "id": 314,
              "name": "changeTab",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isExported": true
              },
              "decorators": [
                {
                  "name": "Output",
                  "type": {
                    "type": "reference",
                    "name": "Output"
                  },
                  "arguments": {}
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/theme/components/route-tabset/route-tabset.component.ts",
                  "line": 39,
                  "character": 21
                }
              ],
              "type": {
                "type": "reference",
                "name": "EventEmitter",
                "typeArguments": [
                  {
                    "type": "instrinct",
                    "name": "any"
                  }
                ]
              },
              "defaultValue": " new EventEmitter<any>()"
            },
            {
              "id": 309,
              "name": "fullWidthValue",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isExported": true
              },
              "decorators": [
                {
                  "name": "HostBinding",
                  "type": {
                    "type": "reference",
                    "name": "HostBinding"
                  },
                  "arguments": {
                    "hostPropertyName": "'class.full-width'"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/theme/components/route-tabset/route-tabset.component.ts",
                  "line": 30,
                  "character": 49
                }
              ],
              "type": {
                "type": "instrinct",
                "name": "boolean"
              },
              "defaultValue": "false"
            },
            {
              "id": 316,
              "name": "router",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isPrivate": true,
                "isConstructorProperty": true,
                "isExported": true
              },
              "sources": [
                {
                  "fileName": "src/framework/theme/components/route-tabset/route-tabset.component.ts",
                  "line": 41,
                  "character": 28
                }
              ],
              "type": {
                "type": "reference",
                "name": "Router"
              }
            },
            {
              "id": 310,
              "name": "tabs",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isExported": true
              },
              "decorators": [
                {
                  "name": "Input",
                  "type": {
                    "type": "reference",
                    "name": "Input"
                  },
                  "arguments": {}
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/theme/components/route-tabset/route-tabset.component.ts",
                  "line": 32,
                  "character": 15
                }
              ],
              "type": {
                "type": "instrinct",
                "isArray": true,
                "name": "any"
              }
            },
            {
              "id": 311,
              "name": "fullWidth",
              "kind": 262144,
              "kindString": "Accessor",
              "flags": {
                "isExported": true
              },
              "decorators": [
                {
                  "name": "Input",
                  "type": {
                    "type": "reference",
                    "name": "Input"
                  },
                  "arguments": {}
                }
              ],
              "setSignature": [
                {
                  "id": 312,
                  "name": "__set",
                  "kind": 1048576,
                  "kindString": "Set signature",
                  "flags": {},
                  "parameters": [
                    {
                      "id": 313,
                      "name": "val",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {},
                      "type": {
                        "type": "instrinct",
                        "name": "boolean"
                      }
                    }
                  ],
                  "type": {
                    "type": "instrinct",
                    "name": "void"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/theme/components/route-tabset/route-tabset.component.ts",
                  "line": 35,
                  "character": 15
                }
              ]
            },
            {
              "id": 319,
              "name": "selectTab",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 320,
                  "name": "selectTab",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "parameters": [
                    {
                      "id": 321,
                      "name": "tab",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {},
                      "type": {
                        "type": "instrinct",
                        "name": "any"
                      }
                    }
                  ],
                  "type": {
                    "type": "instrinct",
                    "name": "void"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/theme/components/route-tabset/route-tabset.component.ts",
                  "line": 44,
                  "character": 11
                }
              ]
            }
          ],
          "groups": [
            {
              "title": "Constructors",
              "kind": 512,
              "children": [
                315
              ]
            },
            {
              "title": "Properties",
              "kind": 1024,
              "children": [
                314,
                309,
                316,
                310
              ]
            },
            {
              "title": "Accessors",
              "kind": 262144,
              "children": [
                311
              ]
            },
            {
              "title": "Methods",
              "kind": 2048,
              "children": [
                319
              ]
            }
          ],
          "sources": [
            {
              "fileName": "src/framework/theme/components/route-tabset/route-tabset.component.ts",
              "line": 28,
              "character": 36
            }
          ]
        }
      ],
      "groups": [
        {
          "title": "Classes",
          "kind": 128,
          "children": [
            308
          ]
        }
      ],
      "sources": [
        {
          "fileName": "src/framework/theme/components/route-tabset/route-tabset.component.ts",
          "line": 1,
          "character": 0
        }
      ]
    },
    {
      "id": 322,
      "name": "\"src/framework/theme/components/route-tabset/route-tabset.module\"",
      "kind": 1,
      "kindString": "External module",
      "flags": {
        "isExported": true
      },
      "originalName": "/Users/nixa/Development/Projects/Akveo/ng2-admin/src/framework/theme/components/route-tabset/route-tabset.module.ts",
      "children": [
        {
          "id": 323,
          "name": "NgaRouteTabsetModule",
          "kind": 128,
          "kindString": "Class",
          "flags": {
            "isExported": true
          },
          "decorators": [
            {
              "name": "NgModule",
              "type": {
                "type": "reference",
                "name": "NgModule"
              },
              "arguments": {
                "obj": "{\n  imports: [\n    NgaSharedModule,\n  ],\n  declarations: [\n    NgaRouteTabsetComponent,\n  ],\n  exports: [\n    NgaRouteTabsetComponent,\n  ],\n}"
              }
            }
          ],
          "sources": [
            {
              "fileName": "src/framework/theme/components/route-tabset/route-tabset.module.ts",
              "line": 23,
              "character": 33
            }
          ]
        }
      ],
      "groups": [
        {
          "title": "Classes",
          "kind": 128,
          "children": [
            323
          ]
        }
      ],
      "sources": [
        {
          "fileName": "src/framework/theme/components/route-tabset/route-tabset.module.ts",
          "line": 1,
          "character": 0
        }
      ]
    },
    {
      "id": 91,
      "name": "\"src/framework/theme/components/shared/shared.module\"",
      "kind": 1,
      "kindString": "External module",
      "flags": {
        "isExported": true
      },
      "originalName": "/Users/nixa/Development/Projects/Akveo/ng2-admin/src/framework/theme/components/shared/shared.module.ts",
      "children": [
        {
          "id": 92,
          "name": "NgaSharedModule",
          "kind": 128,
          "kindString": "Class",
          "flags": {
            "isExported": true
          },
          "decorators": [
            {
              "name": "NgModule",
              "type": {
                "type": "reference",
                "name": "NgModule"
              },
              "arguments": {
                "obj": "{\n  exports: [\n    CommonModule,\n    FormsModule,\n    RouterModule,\n  ],\n}"
              }
            }
          ],
          "sources": [
            {
              "fileName": "src/framework/theme/components/shared/shared.module.ts",
              "line": 18,
              "character": 28
            }
          ]
        }
      ],
      "groups": [
        {
          "title": "Classes",
          "kind": 128,
          "children": [
            92
          ]
        }
      ],
      "sources": [
        {
          "fileName": "src/framework/theme/components/shared/shared.module.ts",
          "line": 1,
          "character": 0
        }
      ]
    },
    {
      "id": 349,
      "name": "\"src/framework/theme/components/sidebar/sidebar.component\"",
      "kind": 1,
      "kindString": "External module",
      "flags": {
        "isExported": true
      },
      "originalName": "/Users/nixa/Development/Projects/Akveo/ng2-admin/src/framework/theme/components/sidebar/sidebar.component.ts",
      "children": [
        {
          "id": 353,
          "name": "NgaSidebarComponent",
          "kind": 128,
          "kindString": "Class",
          "flags": {
            "isExported": true
          },
          "comment": {
            "shortText": "Main sidebar component.",
            "text": "Sidebar can be place on the left or right side of the layout, can be fixed (shown above the content)\nor can push the layout when opened.\n",
            "tags": [
              {
                "tag": "theme",
                "text": "\n$nga-sidebar-foreground: $nga-foreground-inverse !default;\n$nga-sidebar-background: $nga-background-inverse !default;\n$nga-sidebar-height: 100vh !default;\n$nga-sidebar-width: 12rem !default;\n$nga-sidebar-width-compact: 4rem !default;\n$nga-sidebar-padding: $nga-padding !default;\n$nga-sidebar-header-height: 3.5rem !default;\n$nga-sidebar-footer-height: 3.5rem !default;\n"
              },
              {
                "tag": "example",
                "text": "\n\n<nga-sidebar left fixed state=\"collapsed\"></nga-sidebar>\n"
              }
            ]
          },
          "decorators": [
            {
              "name": "Component",
              "type": {
                "type": "reference",
                "name": "Component"
              },
              "arguments": {
                "obj": "{\n  selector: 'nga-sidebar',\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  styleUrls: ['./sidebar.component.scss'],\n  template: `\n    <div class=\"scrollable\">\n      <ng-content select=\"nga-sidebar-header\"></ng-content>\n      <div class=\"main-container\">\n        <ng-content></ng-content>\n      </div>\n      <ng-content select=\"nga-sidebar-footer\"></ng-content>\n    </div>\n  `,\n}"
              }
            }
          ],
          "children": [
            {
              "id": 380,
              "name": "constructor",
              "kind": 512,
              "kindString": "Constructor",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 382,
                  "name": "new NgaSidebarComponent",
                  "kind": 16384,
                  "kindString": "Constructor signature",
                  "flags": {},
                  "parameters": [
                    {
                      "id": 383,
                      "name": "sidebarService",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {},
                      "type": {
                        "type": "reference",
                        "name": "NgaSidebarService",
                        "id": 325
                      }
                    }
                  ],
                  "type": {
                    "type": "reference",
                    "name": "NgaSidebarComponent",
                    "id": 353
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/theme/components/sidebar/sidebar.component.ts",
                  "line": 159,
                  "character": 23
                }
              ]
            },
            {
              "id": 358,
              "name": "fixedValue",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isExported": true
              },
              "decorators": [
                {
                  "name": "HostBinding",
                  "type": {
                    "type": "reference",
                    "name": "HostBinding"
                  },
                  "arguments": {
                    "hostPropertyName": "'class.fixed'"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/theme/components/sidebar/sidebar.component.ts",
                  "line": 100,
                  "character": 40
                }
              ],
              "type": {
                "type": "instrinct",
                "name": "boolean"
              },
              "defaultValue": "false"
            },
            {
              "id": 360,
              "name": "leftValue",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isExported": true
              },
              "decorators": [
                {
                  "name": "HostBinding",
                  "type": {
                    "type": "reference",
                    "name": "HostBinding"
                  },
                  "arguments": {
                    "hostPropertyName": "'class.left'"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/theme/components/sidebar/sidebar.component.ts",
                  "line": 102,
                  "character": 38
                }
              ],
              "type": {
                "type": "instrinct",
                "name": "boolean"
              },
              "defaultValue": "false"
            },
            {
              "id": 359,
              "name": "rightValue",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isExported": true
              },
              "decorators": [
                {
                  "name": "HostBinding",
                  "type": {
                    "type": "reference",
                    "name": "HostBinding"
                  },
                  "arguments": {
                    "hostPropertyName": "'class.right'"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/theme/components/sidebar/sidebar.component.ts",
                  "line": 101,
                  "character": 40
                }
              ],
              "type": {
                "type": "instrinct",
                "name": "boolean"
              },
              "defaultValue": "false"
            },
            {
              "id": 381,
              "name": "sidebarService",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isPrivate": true,
                "isConstructorProperty": true,
                "isExported": true
              },
              "sources": [
                {
                  "fileName": "src/framework/theme/components/sidebar/sidebar.component.ts",
                  "line": 161,
                  "character": 36
                }
              ],
              "type": {
                "type": "reference",
                "name": "NgaSidebarService",
                "id": 325
              }
            },
            {
              "id": 357,
              "name": "stateValue",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isExported": true,
                "isProtected": true
              },
              "sources": [
                {
                  "fileName": "src/framework/theme/components/sidebar/sidebar.component.ts",
                  "line": 98,
                  "character": 22
                }
              ],
              "type": {
                "type": "instrinct",
                "name": "string"
              }
            },
            {
              "id": 379,
              "name": "tag",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isExported": true
              },
              "comment": {
                "shortText": "Tags a sidebar with some ID, can be later used in sidebar service\nto determine which sidebar triggered the action, if multiple sidebars exist on the page.",
                "tags": [
                  {
                    "tag": "type",
                    "text": "string\n"
                  }
                ]
              },
              "decorators": [
                {
                  "name": "Input",
                  "type": {
                    "type": "reference",
                    "name": "Input"
                  },
                  "arguments": {}
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/theme/components/sidebar/sidebar.component.ts",
                  "line": 159,
                  "character": 14
                }
              ],
              "type": {
                "type": "instrinct",
                "name": "string"
              }
            },
            {
              "id": 355,
              "name": "STATE_COLLAPSED",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isStatic": true,
                "isExported": true
              },
              "sources": [
                {
                  "fileName": "src/framework/theme/components/sidebar/sidebar.component.ts",
                  "line": 95,
                  "character": 33
                }
              ],
              "type": {
                "type": "instrinct",
                "name": "string"
              },
              "defaultValue": "\"collapsed\""
            },
            {
              "id": 356,
              "name": "STATE_COMPACTED",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isStatic": true,
                "isExported": true
              },
              "sources": [
                {
                  "fileName": "src/framework/theme/components/sidebar/sidebar.component.ts",
                  "line": 96,
                  "character": 33
                }
              ],
              "type": {
                "type": "instrinct",
                "name": "string"
              },
              "defaultValue": "\"compacted\""
            },
            {
              "id": 354,
              "name": "STATE_EXPANDED",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isStatic": true,
                "isExported": true
              },
              "sources": [
                {
                  "fileName": "src/framework/theme/components/sidebar/sidebar.component.ts",
                  "line": 94,
                  "character": 32
                }
              ],
              "type": {
                "type": "instrinct",
                "name": "string"
              },
              "defaultValue": "\"expanded\""
            },
            {
              "id": 363,
              "name": "collapsed",
              "kind": 262144,
              "kindString": "Accessor",
              "flags": {
                "isExported": true
              },
              "decorators": [
                {
                  "name": "HostBinding",
                  "type": {
                    "type": "reference",
                    "name": "HostBinding"
                  },
                  "arguments": {
                    "hostPropertyName": "'class.collapsed'"
                  }
                }
              ],
              "getSignature": [
                {
                  "id": 364,
                  "name": "__get",
                  "kind": 524288,
                  "kindString": "Get signature",
                  "flags": {},
                  "type": {
                    "type": "instrinct",
                    "name": "boolean"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/theme/components/sidebar/sidebar.component.ts",
                  "line": 109,
                  "character": 15
                }
              ]
            },
            {
              "id": 365,
              "name": "compacted",
              "kind": 262144,
              "kindString": "Accessor",
              "flags": {
                "isExported": true
              },
              "decorators": [
                {
                  "name": "HostBinding",
                  "type": {
                    "type": "reference",
                    "name": "HostBinding"
                  },
                  "arguments": {
                    "hostPropertyName": "'class.compacted'"
                  }
                }
              ],
              "getSignature": [
                {
                  "id": 366,
                  "name": "__get",
                  "kind": 524288,
                  "kindString": "Get signature",
                  "flags": {},
                  "type": {
                    "type": "instrinct",
                    "name": "boolean"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/theme/components/sidebar/sidebar.component.ts",
                  "line": 113,
                  "character": 15
                }
              ]
            },
            {
              "id": 361,
              "name": "expanded",
              "kind": 262144,
              "kindString": "Accessor",
              "flags": {
                "isExported": true
              },
              "decorators": [
                {
                  "name": "HostBinding",
                  "type": {
                    "type": "reference",
                    "name": "HostBinding"
                  },
                  "arguments": {
                    "hostPropertyName": "'class.expanded'"
                  }
                }
              ],
              "getSignature": [
                {
                  "id": 362,
                  "name": "__get",
                  "kind": 524288,
                  "kindString": "Get signature",
                  "flags": {},
                  "type": {
                    "type": "instrinct",
                    "name": "boolean"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/theme/components/sidebar/sidebar.component.ts",
                  "line": 105,
                  "character": 14
                }
              ]
            },
            {
              "id": 373,
              "name": "fixed",
              "kind": 262144,
              "kindString": "Accessor",
              "flags": {
                "isExported": true
              },
              "comment": {
                "shortText": "Makes sidebar fixed (shown below the layout content)",
                "tags": [
                  {
                    "tag": "type",
                    "text": "boolean\n"
                  }
                ]
              },
              "decorators": [
                {
                  "name": "Input",
                  "type": {
                    "type": "reference",
                    "name": "Input"
                  },
                  "arguments": {}
                }
              ],
              "setSignature": [
                {
                  "id": 374,
                  "name": "__set",
                  "kind": 1048576,
                  "kindString": "Set signature",
                  "flags": {},
                  "comment": {
                    "shortText": "Makes sidebar fixed (shown below the layout content)",
                    "tags": [
                      {
                        "tag": "type",
                        "text": "boolean\n"
                      }
                    ]
                  },
                  "parameters": [
                    {
                      "id": 375,
                      "name": "val",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {},
                      "type": {
                        "type": "instrinct",
                        "name": "boolean"
                      }
                    }
                  ],
                  "type": {
                    "type": "instrinct",
                    "name": "void"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/theme/components/sidebar/sidebar.component.ts",
                  "line": 140,
                  "character": 11
                }
              ]
            },
            {
              "id": 370,
              "name": "left",
              "kind": 262144,
              "kindString": "Accessor",
              "flags": {
                "isExported": true
              },
              "comment": {
                "shortText": "Places sidebar on the right side",
                "tags": [
                  {
                    "tag": "type",
                    "text": "boolean\n"
                  }
                ]
              },
              "decorators": [
                {
                  "name": "Input",
                  "type": {
                    "type": "reference",
                    "name": "Input"
                  },
                  "arguments": {}
                }
              ],
              "setSignature": [
                {
                  "id": 371,
                  "name": "__set",
                  "kind": 1048576,
                  "kindString": "Set signature",
                  "flags": {},
                  "comment": {
                    "shortText": "Places sidebar on the right side",
                    "tags": [
                      {
                        "tag": "type",
                        "text": "boolean\n"
                      }
                    ]
                  },
                  "parameters": [
                    {
                      "id": 372,
                      "name": "val",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {},
                      "type": {
                        "type": "instrinct",
                        "name": "boolean"
                      }
                    }
                  ],
                  "type": {
                    "type": "instrinct",
                    "name": "void"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/theme/components/sidebar/sidebar.component.ts",
                  "line": 131,
                  "character": 10
                }
              ]
            },
            {
              "id": 367,
              "name": "right",
              "kind": 262144,
              "kindString": "Accessor",
              "flags": {
                "isExported": true
              },
              "comment": {
                "shortText": "Places sidebar on the left side",
                "tags": [
                  {
                    "tag": "type",
                    "text": "boolean\n"
                  }
                ]
              },
              "decorators": [
                {
                  "name": "Input",
                  "type": {
                    "type": "reference",
                    "name": "Input"
                  },
                  "arguments": {}
                }
              ],
              "setSignature": [
                {
                  "id": 368,
                  "name": "__set",
                  "kind": 1048576,
                  "kindString": "Set signature",
                  "flags": {},
                  "comment": {
                    "shortText": "Places sidebar on the left side",
                    "tags": [
                      {
                        "tag": "type",
                        "text": "boolean\n"
                      }
                    ]
                  },
                  "parameters": [
                    {
                      "id": 369,
                      "name": "val",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {},
                      "type": {
                        "type": "instrinct",
                        "name": "boolean"
                      }
                    }
                  ],
                  "type": {
                    "type": "instrinct",
                    "name": "void"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/theme/components/sidebar/sidebar.component.ts",
                  "line": 122,
                  "character": 11
                }
              ]
            },
            {
              "id": 376,
              "name": "state",
              "kind": 262144,
              "kindString": "Accessor",
              "flags": {
                "isExported": true
              },
              "comment": {
                "shortText": "Initial sidebar state, expanded|collapsed|compacted",
                "tags": [
                  {
                    "tag": "type",
                    "text": "string\n"
                  }
                ]
              },
              "decorators": [
                {
                  "name": "Input",
                  "type": {
                    "type": "reference",
                    "name": "Input"
                  },
                  "arguments": {}
                }
              ],
              "setSignature": [
                {
                  "id": 377,
                  "name": "__set",
                  "kind": 1048576,
                  "kindString": "Set signature",
                  "flags": {},
                  "comment": {
                    "shortText": "Initial sidebar state, expanded|collapsed|compacted",
                    "tags": [
                      {
                        "tag": "type",
                        "text": "string\n"
                      }
                    ]
                  },
                  "parameters": [
                    {
                      "id": 378,
                      "name": "val",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {},
                      "type": {
                        "type": "instrinct",
                        "name": "string"
                      }
                    }
                  ],
                  "type": {
                    "type": "instrinct",
                    "name": "void"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/theme/components/sidebar/sidebar.component.ts",
                  "line": 149,
                  "character": 11
                }
              ]
            },
            {
              "id": 386,
              "name": "collapse",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 387,
                  "name": "collapse",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "comment": {
                    "shortText": "Collapses the sidebar"
                  },
                  "type": {
                    "type": "instrinct",
                    "name": "void"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/theme/components/sidebar/sidebar.component.ts",
                  "line": 186,
                  "character": 10
                }
              ]
            },
            {
              "id": 390,
              "name": "compact",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 391,
                  "name": "compact",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "comment": {
                    "shortText": "Compacts the sidebar (minimizes)"
                  },
                  "type": {
                    "type": "instrinct",
                    "name": "void"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/theme/components/sidebar/sidebar.component.ts",
                  "line": 200,
                  "character": 9
                }
              ]
            },
            {
              "id": 388,
              "name": "expand",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 389,
                  "name": "expand",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "comment": {
                    "shortText": "Expands the sidebar"
                  },
                  "type": {
                    "type": "instrinct",
                    "name": "void"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/theme/components/sidebar/sidebar.component.ts",
                  "line": 193,
                  "character": 8
                }
              ]
            },
            {
              "id": 384,
              "name": "ngOnInit",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 385,
                  "name": "ngOnInit",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "type": {
                    "type": "instrinct",
                    "name": "void"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/theme/components/sidebar/sidebar.component.ts",
                  "line": 163,
                  "character": 10
                }
              ]
            },
            {
              "id": 392,
              "name": "toggle",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 393,
                  "name": "toggle",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "comment": {
                    "shortText": "Toggles sidebar state (expanded|collapsed|compacted)"
                  },
                  "parameters": [
                    {
                      "id": 394,
                      "name": "compact",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {},
                      "comment": {
                        "text": "boolean If true, then sidebar state will be changed between expanded & compacted,\notherwise - between expanded & collapsed. False by default.\n"
                      },
                      "type": {
                        "type": "instrinct",
                        "name": "boolean"
                      },
                      "defaultValue": "false"
                    }
                  ],
                  "type": {
                    "type": "instrinct",
                    "name": "void"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/theme/components/sidebar/sidebar.component.ts",
                  "line": 209,
                  "character": 8
                }
              ]
            }
          ],
          "groups": [
            {
              "title": "Constructors",
              "kind": 512,
              "children": [
                380
              ]
            },
            {
              "title": "Properties",
              "kind": 1024,
              "children": [
                358,
                360,
                359,
                381,
                357,
                379,
                355,
                356,
                354
              ]
            },
            {
              "title": "Accessors",
              "kind": 262144,
              "children": [
                363,
                365,
                361,
                373,
                370,
                367,
                376
              ]
            },
            {
              "title": "Methods",
              "kind": 2048,
              "children": [
                386,
                390,
                388,
                384,
                392
              ]
            }
          ],
          "sources": [
            {
              "fileName": "src/framework/theme/components/sidebar/sidebar.component.ts",
              "line": 92,
              "character": 32
            }
          ],
          "implementedTypes": [
            {
              "type": "reference",
              "name": "OnInit"
            }
          ]
        },
        {
          "id": 351,
          "name": "NgaSidebarContentComponent",
          "kind": 128,
          "kindString": "Class",
          "flags": {
            "isExported": true
          },
          "comment": {
            "shortText": "Sidebar content container.",
            "text": "Placeholder which contains a sidebar main content.\n"
          },
          "decorators": [
            {
              "name": "Component",
              "type": {
                "type": "reference",
                "name": "Component"
              },
              "arguments": {
                "obj": "{\n  selector: 'nga-sidebar-content',\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  template: `\n    <ng-content></ng-content>\n  `,\n}"
              }
            }
          ],
          "sources": [
            {
              "fileName": "src/framework/theme/components/sidebar/sidebar.component.ts",
              "line": 39,
              "character": 39
            }
          ]
        },
        {
          "id": 352,
          "name": "NgaSidebarFooterComponent",
          "kind": 128,
          "kindString": "Class",
          "flags": {
            "isExported": true
          },
          "comment": {
            "shortText": "Sidebar footer container.",
            "text": "Placeholder which contains a sidebar footer content,\nplaced at the very bottom of the sidebar outside of the scroll area.\n"
          },
          "decorators": [
            {
              "name": "Component",
              "type": {
                "type": "reference",
                "name": "Component"
              },
              "arguments": {
                "obj": "{\n  selector: 'nga-sidebar-footer',\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  template: `\n    <ng-content></ng-content>\n  `,\n}"
              }
            }
          ],
          "sources": [
            {
              "fileName": "src/framework/theme/components/sidebar/sidebar.component.ts",
              "line": 55,
              "character": 38
            }
          ]
        },
        {
          "id": 350,
          "name": "NgaSidebarHeaderComponent",
          "kind": 128,
          "kindString": "Class",
          "flags": {
            "isExported": true
          },
          "comment": {
            "shortText": "Sidebar header container.",
            "text": "Placeholder which contains a sidebar header content,\nplaced at the very top of the sidebar outside of the scroll area.\n"
          },
          "decorators": [
            {
              "name": "Component",
              "type": {
                "type": "reference",
                "name": "Component"
              },
              "arguments": {
                "obj": "{\n  selector: 'nga-sidebar-header',\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  template: `\n    <ng-content></ng-content>\n  `,\n}"
              }
            }
          ],
          "sources": [
            {
              "fileName": "src/framework/theme/components/sidebar/sidebar.component.ts",
              "line": 24,
              "character": 38
            }
          ]
        }
      ],
      "groups": [
        {
          "title": "Classes",
          "kind": 128,
          "children": [
            353,
            351,
            352,
            350
          ]
        }
      ],
      "sources": [
        {
          "fileName": "src/framework/theme/components/sidebar/sidebar.component.ts",
          "line": 1,
          "character": 0
        }
      ]
    },
    {
      "id": 395,
      "name": "\"src/framework/theme/components/sidebar/sidebar.module\"",
      "kind": 1,
      "kindString": "External module",
      "flags": {
        "isExported": true
      },
      "originalName": "/Users/nixa/Development/Projects/Akveo/ng2-admin/src/framework/theme/components/sidebar/sidebar.module.ts",
      "children": [
        {
          "id": 396,
          "name": "NgaSidebarModule",
          "kind": 128,
          "kindString": "Class",
          "flags": {
            "isExported": true
          },
          "decorators": [
            {
              "name": "NgModule",
              "type": {
                "type": "reference",
                "name": "NgModule"
              },
              "arguments": {
                "obj": "{\n  imports: [\n    NgaSharedModule,\n  ],\n  declarations: [\n    ...NGA_SIDEBAR_COMPONENTS,\n  ],\n  exports: [\n    ...NGA_SIDEBAR_COMPONENTS,\n  ],\n}"
              }
            }
          ],
          "children": [
            {
              "id": 397,
              "name": "forRoot",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isStatic": true,
                "isExported": true
              },
              "signatures": [
                {
                  "id": 398,
                  "name": "forRoot",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "type": {
                    "type": "reference",
                    "name": "ModuleWithProviders"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/theme/components/sidebar/sidebar.module.ts",
                  "line": 42,
                  "character": 16
                }
              ]
            }
          ],
          "groups": [
            {
              "title": "Methods",
              "kind": 2048,
              "children": [
                397
              ]
            }
          ],
          "sources": [
            {
              "fileName": "src/framework/theme/components/sidebar/sidebar.module.ts",
              "line": 41,
              "character": 29
            }
          ]
        },
        {
          "id": 399,
          "name": "NGA_SIDEBAR_COMPONENTS",
          "kind": 32,
          "kindString": "Variable",
          "flags": {},
          "sources": [
            {
              "fileName": "src/framework/theme/components/sidebar/sidebar.module.ts",
              "line": 19,
              "character": 28
            }
          ],
          "type": {
            "type": "reference",
            "name": "Array",
            "typeArguments": [
              {
                "type": "union",
                "types": [
                  {
                    "type": "reference",
                    "name": "NgaSidebarComponent",
                    "id": 353
                  },
                  {
                    "type": "reference",
                    "name": "NgaSidebarContentComponent",
                    "id": 351
                  }
                ]
              }
            ]
          },
          "defaultValue": " [\n  NgaSidebarComponent,\n  NgaSidebarContentComponent,\n  NgaSidebarFooterComponent,\n  NgaSidebarHeaderComponent,\n]"
        },
        {
          "id": 400,
          "name": "NGA_SIDEBAR_PROVIDERS",
          "kind": 32,
          "kindString": "Variable",
          "flags": {},
          "sources": [
            {
              "fileName": "src/framework/theme/components/sidebar/sidebar.module.ts",
              "line": 26,
              "character": 27
            }
          ],
          "type": {
            "type": "reference",
            "name": "Array",
            "typeArguments": [
              {
                "type": "reference",
                "name": "NgaSidebarService",
                "id": 325
              }
            ]
          },
          "defaultValue": " [\n  NgaSidebarService,\n]"
        }
      ],
      "groups": [
        {
          "title": "Classes",
          "kind": 128,
          "children": [
            396
          ]
        },
        {
          "title": "Variables",
          "kind": 32,
          "children": [
            399,
            400
          ]
        }
      ],
      "sources": [
        {
          "fileName": "src/framework/theme/components/sidebar/sidebar.module.ts",
          "line": 1,
          "character": 0
        }
      ]
    },
    {
      "id": 324,
      "name": "\"src/framework/theme/components/sidebar/sidebar.service\"",
      "kind": 1,
      "kindString": "External module",
      "flags": {
        "isExported": true
      },
      "originalName": "/Users/nixa/Development/Projects/Akveo/ng2-admin/src/framework/theme/components/sidebar/sidebar.service.ts",
      "children": [
        {
          "id": 325,
          "name": "NgaSidebarService",
          "kind": 128,
          "kindString": "Class",
          "flags": {
            "isExported": true
          },
          "decorators": [
            {
              "name": "Injectable",
              "type": {
                "type": "reference",
                "name": "Injectable"
              },
              "arguments": {}
            }
          ],
          "children": [
            {
              "id": 336,
              "name": "collapseChanges",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isExported": true
              },
              "sources": [
                {
                  "fileName": "src/framework/theme/components/sidebar/sidebar.service.ts",
                  "line": 14,
                  "character": 17
                }
              ],
              "type": {
                "type": "reference",
                "name": "Observable",
                "typeArguments": [
                  {
                    "type": "reflection",
                    "declaration": {
                      "id": 337,
                      "name": "__type",
                      "kind": 65536,
                      "kindString": "Type literal",
                      "flags": {},
                      "children": [
                        {
                          "id": 338,
                          "name": "tag",
                          "kind": 32,
                          "kindString": "Variable",
                          "flags": {},
                          "sources": [
                            {
                              "fileName": "src/framework/theme/components/sidebar/sidebar.service.ts",
                              "line": 14,
                              "character": 35
                            }
                          ],
                          "type": {
                            "type": "instrinct",
                            "name": "string"
                          }
                        }
                      ],
                      "groups": [
                        {
                          "title": "Variables",
                          "kind": 32,
                          "children": [
                            338
                          ]
                        }
                      ],
                      "sources": [
                        {
                          "fileName": "src/framework/theme/components/sidebar/sidebar.service.ts",
                          "line": 14,
                          "character": 30
                        }
                      ]
                    }
                  }
                ]
              },
              "defaultValue": " this.collapseChanges$.asObservable()"
            },
            {
              "id": 328,
              "name": "collapseChanges$",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isPrivate": true,
                "isExported": true
              },
              "sources": [
                {
                  "fileName": "src/framework/theme/components/sidebar/sidebar.service.ts",
                  "line": 10,
                  "character": 26
                }
              ],
              "type": {
                "type": "reference",
                "name": "Subject",
                "typeArguments": [
                  {
                    "type": "instrinct",
                    "name": "Object"
                  }
                ]
              },
              "defaultValue": " new Subject()"
            },
            {
              "id": 333,
              "name": "expandChanges",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isExported": true
              },
              "sources": [
                {
                  "fileName": "src/framework/theme/components/sidebar/sidebar.service.ts",
                  "line": 13,
                  "character": 15
                }
              ],
              "type": {
                "type": "reference",
                "name": "Observable",
                "typeArguments": [
                  {
                    "type": "reflection",
                    "declaration": {
                      "id": 334,
                      "name": "__type",
                      "kind": 65536,
                      "kindString": "Type literal",
                      "flags": {},
                      "children": [
                        {
                          "id": 335,
                          "name": "tag",
                          "kind": 32,
                          "kindString": "Variable",
                          "flags": {},
                          "sources": [
                            {
                              "fileName": "src/framework/theme/components/sidebar/sidebar.service.ts",
                              "line": 13,
                              "character": 33
                            }
                          ],
                          "type": {
                            "type": "instrinct",
                            "name": "string"
                          }
                        }
                      ],
                      "groups": [
                        {
                          "title": "Variables",
                          "kind": 32,
                          "children": [
                            335
                          ]
                        }
                      ],
                      "sources": [
                        {
                          "fileName": "src/framework/theme/components/sidebar/sidebar.service.ts",
                          "line": 13,
                          "character": 28
                        }
                      ]
                    }
                  }
                ]
              },
              "defaultValue": " this.expandChanges$.asObservable()"
            },
            {
              "id": 327,
              "name": "expandChanges$",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isPrivate": true,
                "isExported": true
              },
              "sources": [
                {
                  "fileName": "src/framework/theme/components/sidebar/sidebar.service.ts",
                  "line": 9,
                  "character": 24
                }
              ],
              "type": {
                "type": "reference",
                "name": "Subject",
                "typeArguments": [
                  {
                    "type": "instrinct",
                    "name": "Object"
                  }
                ]
              },
              "defaultValue": " new Subject()"
            },
            {
              "id": 329,
              "name": "toggleChanges",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isExported": true
              },
              "sources": [
                {
                  "fileName": "src/framework/theme/components/sidebar/sidebar.service.ts",
                  "line": 12,
                  "character": 15
                }
              ],
              "type": {
                "type": "reference",
                "name": "Observable",
                "typeArguments": [
                  {
                    "type": "reflection",
                    "declaration": {
                      "id": 330,
                      "name": "__type",
                      "kind": 65536,
                      "kindString": "Type literal",
                      "flags": {},
                      "children": [
                        {
                          "id": 331,
                          "name": "compact",
                          "kind": 32,
                          "kindString": "Variable",
                          "flags": {},
                          "sources": [
                            {
                              "fileName": "src/framework/theme/components/sidebar/sidebar.service.ts",
                              "line": 12,
                              "character": 37
                            }
                          ],
                          "type": {
                            "type": "instrinct",
                            "name": "boolean"
                          }
                        },
                        {
                          "id": 332,
                          "name": "tag",
                          "kind": 32,
                          "kindString": "Variable",
                          "flags": {},
                          "sources": [
                            {
                              "fileName": "src/framework/theme/components/sidebar/sidebar.service.ts",
                              "line": 12,
                              "character": 51
                            }
                          ],
                          "type": {
                            "type": "instrinct",
                            "name": "string"
                          }
                        }
                      ],
                      "groups": [
                        {
                          "title": "Variables",
                          "kind": 32,
                          "children": [
                            331,
                            332
                          ]
                        }
                      ],
                      "sources": [
                        {
                          "fileName": "src/framework/theme/components/sidebar/sidebar.service.ts",
                          "line": 12,
                          "character": 28
                        }
                      ]
                    }
                  }
                ]
              },
              "defaultValue": " this.toggleChanges$.asObservable()"
            },
            {
              "id": 326,
              "name": "toggleChanges$",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isPrivate": true,
                "isExported": true
              },
              "sources": [
                {
                  "fileName": "src/framework/theme/components/sidebar/sidebar.service.ts",
                  "line": 8,
                  "character": 24
                }
              ],
              "type": {
                "type": "reference",
                "name": "Subject",
                "typeArguments": [
                  {
                    "type": "instrinct",
                    "name": "Object"
                  }
                ]
              },
              "defaultValue": " new Subject()"
            },
            {
              "id": 346,
              "name": "collapse",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 347,
                  "name": "collapse",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "parameters": [
                    {
                      "id": 348,
                      "name": "tag",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {
                        "isOptional": true
                      },
                      "type": {
                        "type": "instrinct",
                        "name": "string"
                      }
                    }
                  ],
                  "type": {
                    "type": "instrinct",
                    "name": "void"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/theme/components/sidebar/sidebar.service.ts",
                  "line": 24,
                  "character": 10
                }
              ]
            },
            {
              "id": 343,
              "name": "expand",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 344,
                  "name": "expand",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "parameters": [
                    {
                      "id": 345,
                      "name": "tag",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {
                        "isOptional": true
                      },
                      "type": {
                        "type": "instrinct",
                        "name": "string"
                      }
                    }
                  ],
                  "type": {
                    "type": "instrinct",
                    "name": "void"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/theme/components/sidebar/sidebar.service.ts",
                  "line": 20,
                  "character": 8
                }
              ]
            },
            {
              "id": 339,
              "name": "toggle",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 340,
                  "name": "toggle",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "parameters": [
                    {
                      "id": 341,
                      "name": "compact",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {},
                      "type": {
                        "type": "instrinct",
                        "name": "boolean"
                      },
                      "defaultValue": "false"
                    },
                    {
                      "id": 342,
                      "name": "tag",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {
                        "isOptional": true
                      },
                      "type": {
                        "type": "instrinct",
                        "name": "string"
                      }
                    }
                  ],
                  "type": {
                    "type": "instrinct",
                    "name": "void"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/theme/components/sidebar/sidebar.service.ts",
                  "line": 16,
                  "character": 8
                }
              ]
            }
          ],
          "groups": [
            {
              "title": "Properties",
              "kind": 1024,
              "children": [
                336,
                328,
                333,
                327,
                329,
                326
              ]
            },
            {
              "title": "Methods",
              "kind": 2048,
              "children": [
                346,
                343,
                339
              ]
            }
          ],
          "sources": [
            {
              "fileName": "src/framework/theme/components/sidebar/sidebar.service.ts",
              "line": 6,
              "character": 30
            }
          ]
        }
      ],
      "groups": [
        {
          "title": "Classes",
          "kind": 128,
          "children": [
            325
          ]
        }
      ],
      "sources": [
        {
          "fileName": "src/framework/theme/components/sidebar/sidebar.service.ts",
          "line": 1,
          "character": 0
        }
      ]
    },
    {
      "id": 401,
      "name": "\"src/framework/theme/components/tabset/tabset.component\"",
      "kind": 1,
      "kindString": "External module",
      "flags": {
        "isExported": true
      },
      "originalName": "/Users/nixa/Development/Projects/Akveo/ng2-admin/src/framework/theme/components/tabset/tabset.component.ts",
      "children": [
        {
          "id": 402,
          "name": "NgaTabComponent",
          "kind": 128,
          "kindString": "Class",
          "flags": {
            "isExported": true
          },
          "decorators": [
            {
              "name": "Component",
              "type": {
                "type": "reference",
                "name": "Component"
              },
              "arguments": {
                "obj": "{\n  selector: 'nga-tab',\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  template: `\n    <div [hidden]=\"!active\">\n      <ng-content></ng-content>\n    </div>\n  `,\n}"
              }
            }
          ],
          "children": [
            {
              "id": 404,
              "name": "active",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isExported": true
              },
              "decorators": [
                {
                  "name": "Input",
                  "type": {
                    "type": "reference",
                    "name": "Input"
                  },
                  "arguments": {}
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/theme/components/tabset/tabset.component.ts",
                  "line": 34,
                  "character": 17
                }
              ],
              "type": {
                "type": "instrinct",
                "name": "boolean"
              },
              "defaultValue": "false"
            },
            {
              "id": 405,
              "name": "route",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isExported": true
              },
              "decorators": [
                {
                  "name": "Input",
                  "type": {
                    "type": "reference",
                    "name": "Input"
                  },
                  "arguments": {}
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/theme/components/tabset/tabset.component.ts",
                  "line": 35,
                  "character": 16
                }
              ],
              "type": {
                "type": "instrinct",
                "name": "string"
              }
            },
            {
              "id": 403,
              "name": "tabTitle",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isExported": true
              },
              "decorators": [
                {
                  "name": "Input",
                  "type": {
                    "type": "reference",
                    "name": "Input"
                  },
                  "arguments": {}
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/theme/components/tabset/tabset.component.ts",
                  "line": 33,
                  "character": 19
                }
              ],
              "type": {
                "type": "instrinct",
                "name": "string"
              }
            }
          ],
          "groups": [
            {
              "title": "Properties",
              "kind": 1024,
              "children": [
                404,
                405,
                403
              ]
            }
          ],
          "sources": [
            {
              "fileName": "src/framework/theme/components/tabset/tabset.component.ts",
              "line": 32,
              "character": 28
            }
          ]
        },
        {
          "id": 406,
          "name": "NgaTabsetComponent",
          "kind": 128,
          "kindString": "Class",
          "flags": {
            "isExported": true
          },
          "decorators": [
            {
              "name": "Component",
              "type": {
                "type": "reference",
                "name": "Component"
              },
              "arguments": {
                "obj": "{\n  selector: 'nga-tabset',\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  styleUrls: ['./tabset.component.scss'],\n  template: `\n    <ul class=\"nga-tabset\">\n      <li *ngFor=\"let tab of tabs\"\n      (click)=\"selectTab(tab)\"\n      [class.active]=\"tab.active\">\n        <a href (click)=\"$event.preventDefault()\">{{tab.tabTitle}}</a>\n      </li>\n    </ul>\n    <ng-content select=\"nga-tab\"></ng-content>\n  `,\n}"
              }
            }
          ],
          "children": [
            {
              "id": 414,
              "name": "constructor",
              "kind": 512,
              "kindString": "Constructor",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 416,
                  "name": "new NgaTabsetComponent",
                  "kind": 16384,
                  "kindString": "Constructor signature",
                  "flags": {},
                  "parameters": [
                    {
                      "id": 417,
                      "name": "activatedRoute",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {},
                      "type": {
                        "type": "reference",
                        "name": "ActivatedRoute"
                      }
                    }
                  ],
                  "type": {
                    "type": "reference",
                    "name": "NgaTabsetComponent",
                    "id": 406
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/theme/components/tabset/tabset.component.ts",
                  "line": 66,
                  "character": 48
                }
              ]
            },
            {
              "id": 415,
              "name": "activatedRoute",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isPrivate": true,
                "isConstructorProperty": true,
                "isExported": true
              },
              "sources": [
                {
                  "fileName": "src/framework/theme/components/tabset/tabset.component.ts",
                  "line": 68,
                  "character": 36
                }
              ],
              "type": {
                "type": "reference",
                "name": "ActivatedRoute"
              }
            },
            {
              "id": 413,
              "name": "changeTab",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isExported": true
              },
              "decorators": [
                {
                  "name": "Output",
                  "type": {
                    "type": "reference",
                    "name": "Output"
                  },
                  "arguments": {}
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/theme/components/tabset/tabset.component.ts",
                  "line": 66,
                  "character": 21
                }
              ],
              "type": {
                "type": "reference",
                "name": "EventEmitter",
                "typeArguments": [
                  {
                    "type": "instrinct",
                    "name": "any"
                  }
                ]
              },
              "defaultValue": " new EventEmitter<any>()"
            },
            {
              "id": 408,
              "name": "fullWidthValue",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isExported": true
              },
              "decorators": [
                {
                  "name": "HostBinding",
                  "type": {
                    "type": "reference",
                    "name": "HostBinding"
                  },
                  "arguments": {
                    "hostPropertyName": "'class.full-width'"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/theme/components/tabset/tabset.component.ts",
                  "line": 57,
                  "character": 49
                }
              ],
              "type": {
                "type": "instrinct",
                "name": "boolean"
              },
              "defaultValue": "false"
            },
            {
              "id": 409,
              "name": "routes",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isExported": true
              },
              "decorators": [
                {
                  "name": "Input",
                  "type": {
                    "type": "reference",
                    "name": "Input"
                  },
                  "arguments": {}
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/theme/components/tabset/tabset.component.ts",
                  "line": 59,
                  "character": 17
                }
              ],
              "type": {
                "type": "instrinct",
                "name": "boolean"
              },
              "defaultValue": "false"
            },
            {
              "id": 407,
              "name": "tabs",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isExported": true
              },
              "decorators": [
                {
                  "name": "ContentChildren",
                  "type": {
                    "type": "reference",
                    "name": "ContentChildren"
                  },
                  "arguments": {
                    "selector": "NgaTabComponent"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/theme/components/tabset/tabset.component.ts",
                  "line": 55,
                  "character": 40
                }
              ],
              "type": {
                "type": "reference",
                "name": "QueryList",
                "typeArguments": [
                  {
                    "type": "reference",
                    "name": "NgaTabComponent",
                    "id": 402
                  }
                ]
              }
            },
            {
              "id": 410,
              "name": "fullWidth",
              "kind": 262144,
              "kindString": "Accessor",
              "flags": {
                "isExported": true
              },
              "decorators": [
                {
                  "name": "Input",
                  "type": {
                    "type": "reference",
                    "name": "Input"
                  },
                  "arguments": {}
                }
              ],
              "setSignature": [
                {
                  "id": 411,
                  "name": "__set",
                  "kind": 1048576,
                  "kindString": "Set signature",
                  "flags": {},
                  "parameters": [
                    {
                      "id": 412,
                      "name": "val",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {},
                      "type": {
                        "type": "instrinct",
                        "name": "boolean"
                      }
                    }
                  ],
                  "type": {
                    "type": "instrinct",
                    "name": "void"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/theme/components/tabset/tabset.component.ts",
                  "line": 62,
                  "character": 15
                }
              ]
            },
            {
              "id": 418,
              "name": "ngAfterContentInit",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 419,
                  "name": "ngAfterContentInit",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "type": {
                    "type": "instrinct",
                    "name": "void"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/theme/components/tabset/tabset.component.ts",
                  "line": 71,
                  "character": 20
                }
              ]
            },
            {
              "id": 420,
              "name": "selectTab",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 421,
                  "name": "selectTab",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "parameters": [
                    {
                      "id": 422,
                      "name": "tab",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {},
                      "type": {
                        "type": "reference",
                        "name": "NgaTabComponent",
                        "id": 402
                      }
                    }
                  ],
                  "type": {
                    "type": "instrinct",
                    "name": "void"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/theme/components/tabset/tabset.component.ts",
                  "line": 84,
                  "character": 11
                }
              ]
            }
          ],
          "groups": [
            {
              "title": "Constructors",
              "kind": 512,
              "children": [
                414
              ]
            },
            {
              "title": "Properties",
              "kind": 1024,
              "children": [
                415,
                413,
                408,
                409,
                407
              ]
            },
            {
              "title": "Accessors",
              "kind": 262144,
              "children": [
                410
              ]
            },
            {
              "title": "Methods",
              "kind": 2048,
              "children": [
                418,
                420
              ]
            }
          ],
          "sources": [
            {
              "fileName": "src/framework/theme/components/tabset/tabset.component.ts",
              "line": 53,
              "character": 31
            }
          ],
          "implementedTypes": [
            {
              "type": "reference",
              "name": "AfterContentInit"
            }
          ]
        }
      ],
      "groups": [
        {
          "title": "Classes",
          "kind": 128,
          "children": [
            402,
            406
          ]
        }
      ],
      "sources": [
        {
          "fileName": "src/framework/theme/components/tabset/tabset.component.ts",
          "line": 1,
          "character": 0
        }
      ]
    },
    {
      "id": 423,
      "name": "\"src/framework/theme/components/tabset/tabset.module\"",
      "kind": 1,
      "kindString": "External module",
      "flags": {
        "isExported": true
      },
      "originalName": "/Users/nixa/Development/Projects/Akveo/ng2-admin/src/framework/theme/components/tabset/tabset.module.ts",
      "children": [
        {
          "id": 424,
          "name": "NgaTabsetModule",
          "kind": 128,
          "kindString": "Class",
          "flags": {
            "isExported": true
          },
          "decorators": [
            {
              "name": "NgModule",
              "type": {
                "type": "reference",
                "name": "NgModule"
              },
              "arguments": {
                "obj": "{\n  imports: [\n    NgaSharedModule,\n  ],\n  declarations: [\n    ...NGA_TABSET_COMPONENTS,\n  ],\n  exports: [\n    ...NGA_TABSET_COMPONENTS,\n  ],\n}"
              }
            }
          ],
          "sources": [
            {
              "fileName": "src/framework/theme/components/tabset/tabset.module.ts",
              "line": 28,
              "character": 28
            }
          ]
        },
        {
          "id": 425,
          "name": "NGA_TABSET_COMPONENTS",
          "kind": 32,
          "kindString": "Variable",
          "flags": {},
          "sources": [
            {
              "fileName": "src/framework/theme/components/tabset/tabset.module.ts",
              "line": 12,
              "character": 27
            }
          ],
          "type": {
            "type": "reference",
            "name": "Array",
            "typeArguments": [
              {
                "type": "union",
                "types": [
                  {
                    "type": "reference",
                    "name": "NgaTabComponent",
                    "id": 402
                  },
                  {
                    "type": "reference",
                    "name": "NgaTabsetComponent",
                    "id": 406
                  }
                ]
              }
            ]
          },
          "defaultValue": " [\n  NgaTabsetComponent,\n  NgaTabComponent,\n]"
        }
      ],
      "groups": [
        {
          "title": "Classes",
          "kind": 128,
          "children": [
            424
          ]
        },
        {
          "title": "Variables",
          "kind": 32,
          "children": [
            425
          ]
        }
      ],
      "sources": [
        {
          "fileName": "src/framework/theme/components/tabset/tabset.module.ts",
          "line": 1,
          "character": 0
        }
      ]
    },
    {
      "id": 426,
      "name": "\"src/framework/theme/components/user/user.component\"",
      "kind": 1,
      "kindString": "External module",
      "flags": {
        "isExported": true
      },
      "originalName": "/Users/nixa/Development/Projects/Akveo/ng2-admin/src/framework/theme/components/user/user.component.ts",
      "children": [
        {
          "id": 433,
          "name": "NgaUserComponent",
          "kind": 128,
          "kindString": "Class",
          "flags": {
            "isExported": true
          },
          "comment": {
            "shortText": "Represents a component showing a user avatar (picture) with a user name on the right.",
            "text": "Can be used as a user profile link or can bring a user context menu.\n",
            "tags": [
              {
                "tag": "theme",
                "text": "\n$nga-user-size-small: 1.5rem !default;\n$nga-user-size-medium: 3rem !default;\n$nga-user-size-large: 4rem !default;\n$nga-user-picture-background: $nga-color-gray !default;\n$nga-user-menu-border: $nga-border-color !default;\n"
              }
            ]
          },
          "decorators": [
            {
              "name": "Component",
              "type": {
                "type": "reference",
                "name": "Component"
              },
              "arguments": {
                "obj": "{\n  selector: 'nga-user',\n  styleUrls: ['./user.component.scss'],\n  templateUrl: './user.component.html',\n}"
              }
            }
          ],
          "children": [
            {
              "id": 469,
              "name": "constructor",
              "kind": 512,
              "kindString": "Constructor",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 471,
                  "name": "new NgaUserComponent",
                  "kind": 16384,
                  "kindString": "Constructor signature",
                  "flags": {},
                  "parameters": [
                    {
                      "id": 472,
                      "name": "el",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {},
                      "type": {
                        "type": "reference",
                        "name": "ElementRef"
                      }
                    }
                  ],
                  "type": {
                    "type": "reference",
                    "name": "NgaUserComponent",
                    "id": 433
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/theme/components/user/user.component.ts",
                  "line": 162,
                  "character": 31
                }
              ]
            },
            {
              "id": 447,
              "name": "color",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isExported": true
              },
              "comment": {
                "shortText": "Color of the area shown when no picture specified",
                "tags": [
                  {
                    "tag": "type",
                    "text": "string\n"
                  }
                ]
              },
              "decorators": [
                {
                  "name": "Input",
                  "type": {
                    "type": "reference",
                    "name": "Input"
                  },
                  "arguments": {}
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/theme/components/user/user.component.ts",
                  "line": 100,
                  "character": 16
                }
              ],
              "type": {
                "type": "instrinct",
                "name": "string"
              }
            },
            {
              "id": 470,
              "name": "el",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isPrivate": true,
                "isConstructorProperty": true,
                "isExported": true
              },
              "sources": [
                {
                  "fileName": "src/framework/theme/components/user/user.component.ts",
                  "line": 164,
                  "character": 24
                }
              ],
              "type": {
                "type": "reference",
                "name": "ElementRef"
              }
            },
            {
              "id": 468,
              "name": "isMenuShown",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isExported": true
              },
              "sources": [
                {
                  "fileName": "src/framework/theme/components/user/user.component.ts",
                  "line": 162,
                  "character": 13
                }
              ],
              "type": {
                "type": "instrinct",
                "name": "boolean"
              },
              "defaultValue": "false"
            },
            {
              "id": 448,
              "name": "menu",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isExported": true
              },
              "comment": {
                "shortText": "List of menu items for a user context menu (shown when clicked)",
                "tags": [
                  {
                    "tag": "type",
                    "text": "NgaUserMenuItem[]\n"
                  }
                ]
              },
              "decorators": [
                {
                  "name": "Input",
                  "type": {
                    "type": "reference",
                    "name": "Input"
                  },
                  "arguments": {}
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/theme/components/user/user.component.ts",
                  "line": 106,
                  "character": 15
                }
              ],
              "type": {
                "type": "reference",
                "isArray": true,
                "name": "NgaUserMenuItem",
                "id": 427
              },
              "defaultValue": " []"
            },
            {
              "id": 464,
              "name": "menuClick",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isExported": true
              },
              "comment": {
                "shortText": "Outputs when a context menu item is clicked",
                "tags": [
                  {
                    "tag": "type",
                    "text": "EventEmitter<NgaUserMenuItem>\n"
                  }
                ]
              },
              "decorators": [
                {
                  "name": "Output",
                  "type": {
                    "type": "reference",
                    "name": "Output"
                  },
                  "arguments": {}
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/theme/components/user/user.component.ts",
                  "line": 157,
                  "character": 21
                }
              ],
              "type": {
                "type": "reference",
                "name": "EventEmitter",
                "typeArguments": [
                  {
                    "type": "reference",
                    "name": "NgaUserMenuItem",
                    "id": 427
                  }
                ]
              },
              "defaultValue": " new EventEmitter<NgaUserMenuItem>()"
            },
            {
              "id": 444,
              "name": "name",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isExported": true
              },
              "comment": {
                "shortText": "Specifies a name to be shown on the right of a user picture",
                "tags": [
                  {
                    "tag": "type",
                    "text": "string\n"
                  }
                ]
              },
              "decorators": [
                {
                  "name": "Input",
                  "type": {
                    "type": "reference",
                    "name": "Input"
                  },
                  "arguments": {}
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/theme/components/user/user.component.ts",
                  "line": 81,
                  "character": 15
                }
              ],
              "type": {
                "type": "instrinct",
                "name": "string"
              },
              "defaultValue": "\"Anonymous\""
            },
            {
              "id": 446,
              "name": "picture",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isExported": true
              },
              "comment": {
                "shortText": "Absolute path to a user picture\nUser name initials (JD for John Doe) will be shown if no picture specified",
                "tags": [
                  {
                    "tag": "type",
                    "text": "string\n"
                  }
                ]
              },
              "decorators": [
                {
                  "name": "Input",
                  "type": {
                    "type": "reference",
                    "name": "Input"
                  },
                  "arguments": {}
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/theme/components/user/user.component.ts",
                  "line": 94,
                  "character": 18
                }
              ],
              "type": {
                "type": "instrinct",
                "name": "string"
              }
            },
            {
              "id": 467,
              "name": "showInitialsValue",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isExported": true
              },
              "sources": [
                {
                  "fileName": "src/framework/theme/components/user/user.component.ts",
                  "line": 161,
                  "character": 19
                }
              ],
              "type": {
                "type": "instrinct",
                "name": "boolean"
              },
              "defaultValue": "true"
            },
            {
              "id": 465,
              "name": "showNameValue",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isExported": true
              },
              "sources": [
                {
                  "fileName": "src/framework/theme/components/user/user.component.ts",
                  "line": 159,
                  "character": 15
                }
              ],
              "type": {
                "type": "instrinct",
                "name": "boolean"
              },
              "defaultValue": "true"
            },
            {
              "id": 466,
              "name": "showTitleValue",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isExported": true
              },
              "sources": [
                {
                  "fileName": "src/framework/theme/components/user/user.component.ts",
                  "line": 160,
                  "character": 16
                }
              ],
              "type": {
                "type": "instrinct",
                "name": "boolean"
              },
              "defaultValue": "true"
            },
            {
              "id": 437,
              "name": "sizeValue",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isPrivate": true,
                "isExported": true
              },
              "sources": [
                {
                  "fileName": "src/framework/theme/components/user/user.component.ts",
                  "line": 60,
                  "character": 19
                }
              ],
              "type": {
                "type": "instrinct",
                "name": "string"
              }
            },
            {
              "id": 445,
              "name": "title",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isExported": true
              },
              "comment": {
                "shortText": "Specifies a title (written in a smaller font) to be shown under the **name**",
                "tags": [
                  {
                    "tag": "type",
                    "text": "string\n"
                  }
                ]
              },
              "decorators": [
                {
                  "name": "Input",
                  "type": {
                    "type": "reference",
                    "name": "Input"
                  },
                  "arguments": {}
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/theme/components/user/user.component.ts",
                  "line": 87,
                  "character": 16
                }
              ],
              "type": {
                "type": "instrinct",
                "name": "string"
              }
            },
            {
              "id": 436,
              "name": "SIZE_LARGE",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isStatic": true,
                "isExported": true
              },
              "sources": [
                {
                  "fileName": "src/framework/theme/components/user/user.component.ts",
                  "line": 58,
                  "character": 28
                }
              ],
              "type": {
                "type": "stringLiteral",
                "value": "large"
              },
              "defaultValue": "\"large\""
            },
            {
              "id": 435,
              "name": "SIZE_MEDIUM",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isStatic": true,
                "isExported": true
              },
              "sources": [
                {
                  "fileName": "src/framework/theme/components/user/user.component.ts",
                  "line": 57,
                  "character": 29
                }
              ],
              "type": {
                "type": "stringLiteral",
                "value": "medium"
              },
              "defaultValue": "\"medium\""
            },
            {
              "id": 434,
              "name": "SIZE_SMALL",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isStatic": true,
                "isExported": true
              },
              "sources": [
                {
                  "fileName": "src/framework/theme/components/user/user.component.ts",
                  "line": 56,
                  "character": 28
                }
              ],
              "type": {
                "type": "stringLiteral",
                "value": "small"
              },
              "defaultValue": "\"small\""
            },
            {
              "id": 442,
              "name": "large",
              "kind": 262144,
              "kindString": "Accessor",
              "flags": {
                "isExported": true
              },
              "decorators": [
                {
                  "name": "HostBinding",
                  "type": {
                    "type": "reference",
                    "name": "HostBinding"
                  },
                  "arguments": {
                    "hostPropertyName": "'class.large'"
                  }
                }
              ],
              "getSignature": [
                {
                  "id": 443,
                  "name": "__get",
                  "kind": 524288,
                  "kindString": "Get signature",
                  "flags": {},
                  "type": {
                    "type": "instrinct",
                    "name": "boolean"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/theme/components/user/user.component.ts",
                  "line": 73,
                  "character": 11
                }
              ]
            },
            {
              "id": 440,
              "name": "medium",
              "kind": 262144,
              "kindString": "Accessor",
              "flags": {
                "isExported": true
              },
              "decorators": [
                {
                  "name": "HostBinding",
                  "type": {
                    "type": "reference",
                    "name": "HostBinding"
                  },
                  "arguments": {
                    "hostPropertyName": "'class.medium'"
                  }
                }
              ],
              "getSignature": [
                {
                  "id": 441,
                  "name": "__get",
                  "kind": 524288,
                  "kindString": "Get signature",
                  "flags": {},
                  "type": {
                    "type": "instrinct",
                    "name": "boolean"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/theme/components/user/user.component.ts",
                  "line": 68,
                  "character": 12
                }
              ]
            },
            {
              "id": 461,
              "name": "onlyPicture",
              "kind": 262144,
              "kindString": "Accessor",
              "flags": {
                "isExported": true
              },
              "comment": {
                "shortText": "Whether to show only a picture or also show the name and title",
                "tags": [
                  {
                    "tag": "type",
                    "text": "boolean\n"
                  }
                ]
              },
              "decorators": [
                {
                  "name": "Input",
                  "type": {
                    "type": "reference",
                    "name": "Input"
                  },
                  "arguments": {}
                }
              ],
              "setSignature": [
                {
                  "id": 462,
                  "name": "__set",
                  "kind": 1048576,
                  "kindString": "Set signature",
                  "flags": {},
                  "comment": {
                    "shortText": "Whether to show only a picture or also show the name and title",
                    "tags": [
                      {
                        "tag": "type",
                        "text": "boolean\n"
                      }
                    ]
                  },
                  "parameters": [
                    {
                      "id": 463,
                      "name": "val",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {},
                      "type": {
                        "type": "instrinct",
                        "name": "boolean"
                      }
                    }
                  ],
                  "type": {
                    "type": "instrinct",
                    "name": "void"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/theme/components/user/user.component.ts",
                  "line": 149,
                  "character": 17
                }
              ]
            },
            {
              "id": 458,
              "name": "showInitials",
              "kind": 262144,
              "kindString": "Accessor",
              "flags": {
                "isExported": true
              },
              "comment": {
                "shortText": "Whether to show a user initials (if no picture specified) or not",
                "tags": [
                  {
                    "tag": "type",
                    "text": "boolean\n"
                  }
                ]
              },
              "decorators": [
                {
                  "name": "Input",
                  "type": {
                    "type": "reference",
                    "name": "Input"
                  },
                  "arguments": {}
                }
              ],
              "setSignature": [
                {
                  "id": 459,
                  "name": "__set",
                  "kind": 1048576,
                  "kindString": "Set signature",
                  "flags": {},
                  "comment": {
                    "shortText": "Whether to show a user initials (if no picture specified) or not",
                    "tags": [
                      {
                        "tag": "type",
                        "text": "boolean\n"
                      }
                    ]
                  },
                  "parameters": [
                    {
                      "id": 460,
                      "name": "val",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {},
                      "type": {
                        "type": "instrinct",
                        "name": "boolean"
                      }
                    }
                  ],
                  "type": {
                    "type": "instrinct",
                    "name": "void"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/theme/components/user/user.component.ts",
                  "line": 140,
                  "character": 18
                }
              ]
            },
            {
              "id": 452,
              "name": "showName",
              "kind": 262144,
              "kindString": "Accessor",
              "flags": {
                "isExported": true
              },
              "comment": {
                "shortText": "Whether to show a user name or not",
                "tags": [
                  {
                    "tag": "type",
                    "text": "boolean\n"
                  }
                ]
              },
              "decorators": [
                {
                  "name": "Input",
                  "type": {
                    "type": "reference",
                    "name": "Input"
                  },
                  "arguments": {}
                }
              ],
              "setSignature": [
                {
                  "id": 453,
                  "name": "__set",
                  "kind": 1048576,
                  "kindString": "Set signature",
                  "flags": {},
                  "comment": {
                    "shortText": "Whether to show a user name or not",
                    "tags": [
                      {
                        "tag": "type",
                        "text": "boolean\n"
                      }
                    ]
                  },
                  "parameters": [
                    {
                      "id": 454,
                      "name": "val",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {},
                      "type": {
                        "type": "instrinct",
                        "name": "boolean"
                      }
                    }
                  ],
                  "type": {
                    "type": "instrinct",
                    "name": "void"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/theme/components/user/user.component.ts",
                  "line": 122,
                  "character": 14
                }
              ]
            },
            {
              "id": 455,
              "name": "showTitle",
              "kind": 262144,
              "kindString": "Accessor",
              "flags": {
                "isExported": true
              },
              "comment": {
                "shortText": "Whether to show a user title or not",
                "tags": [
                  {
                    "tag": "type",
                    "text": "boolean\n"
                  }
                ]
              },
              "decorators": [
                {
                  "name": "Input",
                  "type": {
                    "type": "reference",
                    "name": "Input"
                  },
                  "arguments": {}
                }
              ],
              "setSignature": [
                {
                  "id": 456,
                  "name": "__set",
                  "kind": 1048576,
                  "kindString": "Set signature",
                  "flags": {},
                  "comment": {
                    "shortText": "Whether to show a user title or not",
                    "tags": [
                      {
                        "tag": "type",
                        "text": "boolean\n"
                      }
                    ]
                  },
                  "parameters": [
                    {
                      "id": 457,
                      "name": "val",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {},
                      "type": {
                        "type": "instrinct",
                        "name": "boolean"
                      }
                    }
                  ],
                  "type": {
                    "type": "instrinct",
                    "name": "void"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/theme/components/user/user.component.ts",
                  "line": 131,
                  "character": 15
                }
              ]
            },
            {
              "id": 449,
              "name": "size",
              "kind": 262144,
              "kindString": "Accessor",
              "flags": {
                "isExported": true
              },
              "comment": {
                "shortText": "Size of the component, small|medium|large",
                "tags": [
                  {
                    "tag": "type",
                    "text": "string\n"
                  }
                ]
              },
              "decorators": [
                {
                  "name": "Input",
                  "type": {
                    "type": "reference",
                    "name": "Input"
                  },
                  "arguments": {}
                }
              ],
              "setSignature": [
                {
                  "id": 450,
                  "name": "__set",
                  "kind": 1048576,
                  "kindString": "Set signature",
                  "flags": {},
                  "comment": {
                    "shortText": "Size of the component, small|medium|large",
                    "tags": [
                      {
                        "tag": "type",
                        "text": "string\n"
                      }
                    ]
                  },
                  "parameters": [
                    {
                      "id": 451,
                      "name": "val",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {},
                      "type": {
                        "type": "instrinct",
                        "name": "string"
                      }
                    }
                  ],
                  "type": {
                    "type": "instrinct",
                    "name": "void"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/theme/components/user/user.component.ts",
                  "line": 113,
                  "character": 10
                }
              ]
            },
            {
              "id": 438,
              "name": "small",
              "kind": 262144,
              "kindString": "Accessor",
              "flags": {
                "isExported": true
              },
              "decorators": [
                {
                  "name": "HostBinding",
                  "type": {
                    "type": "reference",
                    "name": "HostBinding"
                  },
                  "arguments": {
                    "hostPropertyName": "'class.small'"
                  }
                }
              ],
              "getSignature": [
                {
                  "id": 439,
                  "name": "__get",
                  "kind": 524288,
                  "kindString": "Get signature",
                  "flags": {},
                  "type": {
                    "type": "instrinct",
                    "name": "boolean"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/theme/components/user/user.component.ts",
                  "line": 63,
                  "character": 11
                }
              ]
            },
            {
              "id": 482,
              "name": "getInitials",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 483,
                  "name": "getInitials",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "type": {
                    "type": "instrinct",
                    "name": "string"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/theme/components/user/user.component.ts",
                  "line": 185,
                  "character": 13
                }
              ]
            },
            {
              "id": 479,
              "name": "hideMenu",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isExported": true
              },
              "decorators": [
                {
                  "name": "HostListener",
                  "type": {
                    "type": "reference",
                    "name": "HostListener"
                  },
                  "arguments": {
                    "eventName": "'document:click'",
                    "args": "['$event']"
                  }
                }
              ],
              "signatures": [
                {
                  "id": 480,
                  "name": "hideMenu",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "parameters": [
                    {
                      "id": 481,
                      "name": "event",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {},
                      "type": {
                        "type": "instrinct",
                        "name": "any"
                      }
                    }
                  ],
                  "type": {
                    "type": "instrinct",
                    "name": "void"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/theme/components/user/user.component.ts",
                  "line": 179,
                  "character": 10
                }
              ]
            },
            {
              "id": 473,
              "name": "itemClick",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 474,
                  "name": "itemClick",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "parameters": [
                    {
                      "id": 475,
                      "name": "event",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {},
                      "type": {
                        "type": "instrinct",
                        "name": "any"
                      }
                    },
                    {
                      "id": 476,
                      "name": "item",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {},
                      "type": {
                        "type": "reference",
                        "name": "NgaUserMenuItem",
                        "id": 427
                      }
                    }
                  ],
                  "type": {
                    "type": "instrinct",
                    "name": "boolean"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/theme/components/user/user.component.ts",
                  "line": 166,
                  "character": 11
                }
              ]
            },
            {
              "id": 477,
              "name": "toggleMenu",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 478,
                  "name": "toggleMenu",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "comment": {
                    "shortText": "Toggles a context menu"
                  },
                  "type": {
                    "type": "instrinct",
                    "name": "void"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/theme/components/user/user.component.ts",
                  "line": 174,
                  "character": 12
                }
              ]
            }
          ],
          "groups": [
            {
              "title": "Constructors",
              "kind": 512,
              "children": [
                469
              ]
            },
            {
              "title": "Properties",
              "kind": 1024,
              "children": [
                447,
                470,
                468,
                448,
                464,
                444,
                446,
                467,
                465,
                466,
                437,
                445,
                436,
                435,
                434
              ]
            },
            {
              "title": "Accessors",
              "kind": 262144,
              "children": [
                442,
                440,
                461,
                458,
                452,
                455,
                449,
                438
              ]
            },
            {
              "title": "Methods",
              "kind": 2048,
              "children": [
                482,
                479,
                473,
                477
              ]
            }
          ],
          "sources": [
            {
              "fileName": "src/framework/theme/components/user/user.component.ts",
              "line": 54,
              "character": 29
            }
          ]
        },
        {
          "id": 427,
          "name": "NgaUserMenuItem",
          "kind": 128,
          "kindString": "Class",
          "flags": {
            "isExported": true
          },
          "children": [
            {
              "id": 432,
              "name": "icon",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isExported": true,
                "isOptional": true
              },
              "comment": {
                "shortText": "Icon class",
                "tags": [
                  {
                    "tag": "type",
                    "text": "string\n"
                  }
                ]
              },
              "sources": [
                {
                  "fileName": "src/framework/theme/components/user/user.component.ts",
                  "line": 34,
                  "character": 6
                }
              ],
              "type": {
                "type": "instrinct",
                "name": "string"
              }
            },
            {
              "id": 429,
              "name": "link",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isExported": true,
                "isOptional": true
              },
              "comment": {
                "shortText": "Menu link for [routerLink] directive",
                "tags": [
                  {
                    "tag": "type",
                    "text": "string\n"
                  }
                ]
              },
              "sources": [
                {
                  "fileName": "src/framework/theme/components/user/user.component.ts",
                  "line": 19,
                  "character": 6
                }
              ],
              "type": {
                "type": "instrinct",
                "name": "string"
              }
            },
            {
              "id": 431,
              "name": "target",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isExported": true,
                "isOptional": true
              },
              "comment": {
                "shortText": "Link target (_blank, _self, etc)",
                "tags": [
                  {
                    "tag": "type",
                    "text": "string\n"
                  }
                ]
              },
              "sources": [
                {
                  "fileName": "src/framework/theme/components/user/user.component.ts",
                  "line": 29,
                  "character": 8
                }
              ],
              "type": {
                "type": "instrinct",
                "name": "string"
              }
            },
            {
              "id": 428,
              "name": "title",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isExported": true
              },
              "comment": {
                "shortText": "Menu title",
                "tags": [
                  {
                    "tag": "type",
                    "text": "string\n"
                  }
                ]
              },
              "sources": [
                {
                  "fileName": "src/framework/theme/components/user/user.component.ts",
                  "line": 14,
                  "character": 7
                }
              ],
              "type": {
                "type": "instrinct",
                "name": "string"
              }
            },
            {
              "id": 430,
              "name": "url",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isExported": true,
                "isOptional": true
              },
              "comment": {
                "shortText": "URL for absolute urls, used directly in href",
                "tags": [
                  {
                    "tag": "type",
                    "text": "string\n"
                  }
                ]
              },
              "sources": [
                {
                  "fileName": "src/framework/theme/components/user/user.component.ts",
                  "line": 24,
                  "character": 5
                }
              ],
              "type": {
                "type": "instrinct",
                "name": "string"
              }
            }
          ],
          "groups": [
            {
              "title": "Properties",
              "kind": 1024,
              "children": [
                432,
                429,
                431,
                428,
                430
              ]
            }
          ],
          "sources": [
            {
              "fileName": "src/framework/theme/components/user/user.component.ts",
              "line": 9,
              "character": 28
            }
          ]
        }
      ],
      "groups": [
        {
          "title": "Classes",
          "kind": 128,
          "children": [
            433,
            427
          ]
        }
      ],
      "sources": [
        {
          "fileName": "src/framework/theme/components/user/user.component.ts",
          "line": 1,
          "character": 0
        }
      ]
    },
    {
      "id": 484,
      "name": "\"src/framework/theme/components/user/user.module\"",
      "kind": 1,
      "kindString": "External module",
      "flags": {
        "isExported": true
      },
      "originalName": "/Users/nixa/Development/Projects/Akveo/ng2-admin/src/framework/theme/components/user/user.module.ts",
      "children": [
        {
          "id": 485,
          "name": "NgaUserModule",
          "kind": 128,
          "kindString": "Class",
          "flags": {
            "isExported": true
          },
          "decorators": [
            {
              "name": "NgModule",
              "type": {
                "type": "reference",
                "name": "NgModule"
              },
              "arguments": {
                "obj": "{\n  imports: [\n    NgaSharedModule,\n  ],\n  declarations: [\n    ...NGA_USER_COMPONENTS,\n  ],\n  exports: [\n    ...NGA_USER_COMPONENTS,\n  ],\n}"
              }
            }
          ],
          "sources": [
            {
              "fileName": "src/framework/theme/components/user/user.module.ts",
              "line": 29,
              "character": 26
            }
          ]
        },
        {
          "id": 486,
          "name": "NGA_USER_COMPONENTS",
          "kind": 32,
          "kindString": "Variable",
          "flags": {},
          "sources": [
            {
              "fileName": "src/framework/theme/components/user/user.module.ts",
              "line": 14,
              "character": 25
            }
          ],
          "type": {
            "type": "reference",
            "name": "Array",
            "typeArguments": [
              {
                "type": "reference",
                "name": "NgaUserComponent",
                "id": 433
              }
            ]
          },
          "defaultValue": " [\n  NgaUserComponent,\n]"
        }
      ],
      "groups": [
        {
          "title": "Classes",
          "kind": 128,
          "children": [
            485
          ]
        },
        {
          "title": "Variables",
          "kind": 32,
          "children": [
            486
          ]
        }
      ],
      "sources": [
        {
          "fileName": "src/framework/theme/components/user/user.module.ts",
          "line": 1,
          "character": 0
        }
      ]
    },
    {
      "id": 487,
      "name": "\"src/framework/theme/index\"",
      "kind": 1,
      "kindString": "External module",
      "flags": {
        "isExported": true
      },
      "originalName": "/Users/nixa/Development/Projects/Akveo/ng2-admin/src/framework/theme/index.ts",
      "sources": [
        {
          "fileName": "src/framework/theme/index.ts",
          "line": 1,
          "character": 0
        }
      ]
    },
    {
      "id": 73,
      "name": "\"src/framework/theme/services/theme.service\"",
      "kind": 1,
      "kindString": "External module",
      "flags": {
        "isExported": true
      },
      "originalName": "/Users/nixa/Development/Projects/Akveo/ng2-admin/src/framework/theme/services/theme.service.ts",
      "children": [
        {
          "id": 74,
          "name": "NgaThemeService",
          "kind": 128,
          "kindString": "Class",
          "flags": {
            "isExported": true
          },
          "decorators": [
            {
              "name": "Injectable",
              "type": {
                "type": "reference",
                "name": "Injectable"
              },
              "arguments": {}
            }
          ],
          "children": [
            {
              "id": 77,
              "name": "constructor",
              "kind": 512,
              "kindString": "Constructor",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 79,
                  "name": "new NgaThemeService",
                  "kind": 16384,
                  "kindString": "Constructor signature",
                  "flags": {},
                  "parameters": [
                    {
                      "id": 80,
                      "name": "options",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {},
                      "decorators": [
                        {
                          "name": "Inject",
                          "type": {
                            "type": "reference",
                            "name": "Inject"
                          },
                          "arguments": {
                            "token": "ngaThemeOptionsToken"
                          }
                        }
                      ],
                      "type": {
                        "type": "instrinct",
                        "name": "any"
                      }
                    }
                  ],
                  "type": {
                    "type": "reference",
                    "name": "NgaThemeService",
                    "id": 74
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/theme/services/theme.service.ts",
                  "line": 18,
                  "character": 47
                }
              ]
            },
            {
              "id": 75,
              "name": "currentTheme",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isExported": true
              },
              "sources": [
                {
                  "fileName": "src/framework/theme/services/theme.service.ts",
                  "line": 17,
                  "character": 14
                }
              ],
              "type": {
                "type": "instrinct",
                "name": "string"
              }
            },
            {
              "id": 78,
              "name": "options",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isConstructorProperty": true,
                "isExported": true,
                "isProtected": true
              },
              "decorators": [
                {
                  "name": "Inject",
                  "type": {
                    "type": "reference",
                    "name": "Inject"
                  },
                  "arguments": {
                    "token": "ngaThemeOptionsToken"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/theme/services/theme.service.ts",
                  "line": 20,
                  "character": 61
                }
              ],
              "type": {
                "type": "instrinct",
                "name": "any"
              }
            },
            {
              "id": 76,
              "name": "themeChanges$",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isPrivate": true,
                "isExported": true
              },
              "sources": [
                {
                  "fileName": "src/framework/theme/services/theme.service.ts",
                  "line": 18,
                  "character": 23
                }
              ],
              "type": {
                "type": "reference",
                "name": "ReplaySubject",
                "typeArguments": [
                  {
                    "type": "instrinct",
                    "name": "Object"
                  }
                ]
              },
              "defaultValue": " new ReplaySubject(1)"
            },
            {
              "id": 81,
              "name": "changeTheme",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 82,
                  "name": "changeTheme",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "parameters": [
                    {
                      "id": 83,
                      "name": "name",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {
                        "isOptional": true
                      },
                      "type": {
                        "type": "instrinct",
                        "name": "string"
                      }
                    }
                  ],
                  "type": {
                    "type": "instrinct",
                    "name": "void"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/theme/services/theme.service.ts",
                  "line": 26,
                  "character": 13
                }
              ]
            },
            {
              "id": 84,
              "name": "onThemeChange",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isExported": true
              },
              "signatures": [
                {
                  "id": 85,
                  "name": "onThemeChange",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "type": {
                    "type": "reference",
                    "name": "Observable",
                    "typeArguments": [
                      {
                        "type": "instrinct",
                        "name": "any"
                      }
                    ]
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/theme/services/theme.service.ts",
                  "line": 31,
                  "character": 15
                }
              ]
            }
          ],
          "groups": [
            {
              "title": "Constructors",
              "kind": 512,
              "children": [
                77
              ]
            },
            {
              "title": "Properties",
              "kind": 1024,
              "children": [
                75,
                78,
                76
              ]
            },
            {
              "title": "Methods",
              "kind": 2048,
              "children": [
                81,
                84
              ]
            }
          ],
          "sources": [
            {
              "fileName": "src/framework/theme/services/theme.service.ts",
              "line": 15,
              "character": 28
            }
          ]
        }
      ],
      "groups": [
        {
          "title": "Classes",
          "kind": 128,
          "children": [
            74
          ]
        }
      ],
      "sources": [
        {
          "fileName": "src/framework/theme/services/theme.service.ts",
          "line": 1,
          "character": 0
        }
      ]
    },
    {
      "id": 86,
      "name": "\"src/framework/theme/theme.module\"",
      "kind": 1,
      "kindString": "External module",
      "flags": {
        "isExported": true
      },
      "originalName": "/Users/nixa/Development/Projects/Akveo/ng2-admin/src/framework/theme/theme.module.ts",
      "children": [
        {
          "id": 87,
          "name": "NgaThemeModule",
          "kind": 128,
          "kindString": "Class",
          "flags": {
            "isExported": true
          },
          "decorators": [
            {
              "name": "NgModule",
              "type": {
                "type": "reference",
                "name": "NgModule"
              },
              "arguments": {
                "obj": "{\n  imports: [\n    CommonModule,\n  ],\n}"
              }
            }
          ],
          "children": [
            {
              "id": 88,
              "name": "forRoot",
              "kind": 2048,
              "kindString": "Method",
              "flags": {
                "isStatic": true,
                "isExported": true
              },
              "signatures": [
                {
                  "id": 89,
                  "name": "forRoot",
                  "kind": 4096,
                  "kindString": "Call signature",
                  "flags": {},
                  "parameters": [
                    {
                      "id": 90,
                      "name": "ngaThemeOptions",
                      "kind": 32768,
                      "kindString": "Parameter",
                      "flags": {},
                      "type": {
                        "type": "reference",
                        "name": "NgaThemeOptions",
                        "id": 54
                      }
                    }
                  ],
                  "type": {
                    "type": "reference",
                    "name": "ModuleWithProviders"
                  }
                }
              ],
              "sources": [
                {
                  "fileName": "src/framework/theme/theme.module.ts",
                  "line": 15,
                  "character": 16
                }
              ]
            }
          ],
          "groups": [
            {
              "title": "Methods",
              "kind": 2048,
              "children": [
                88
              ]
            }
          ],
          "sources": [
            {
              "fileName": "src/framework/theme/theme.module.ts",
              "line": 13,
              "character": 27
            }
          ]
        }
      ],
      "groups": [
        {
          "title": "Classes",
          "kind": 128,
          "children": [
            87
          ]
        }
      ],
      "sources": [
        {
          "fileName": "src/framework/theme/theme.module.ts",
          "line": 1,
          "character": 0
        }
      ]
    },
    {
      "id": 53,
      "name": "\"src/framework/theme/theme.options\"",
      "kind": 1,
      "kindString": "External module",
      "flags": {
        "isExported": true
      },
      "originalName": "/Users/nixa/Development/Projects/Akveo/ng2-admin/src/framework/theme/theme.options.ts",
      "children": [
        {
          "id": 54,
          "name": "NgaThemeOptions",
          "kind": 256,
          "kindString": "Interface",
          "flags": {
            "isExported": true
          },
          "children": [
            {
              "id": 55,
              "name": "name",
              "kind": 1024,
              "kindString": "Property",
              "flags": {
                "isExported": true
              },
              "sources": [
                {
                  "fileName": "src/framework/theme/theme.options.ts",
                  "line": 4,
                  "character": 6
                }
              ],
              "type": {
                "type": "instrinct",
                "name": "string"
              }
            }
          ],
          "groups": [
            {
              "title": "Properties",
              "kind": 1024,
              "children": [
                55
              ]
            }
          ],
          "sources": [
            {
              "fileName": "src/framework/theme/theme.options.ts",
              "line": 3,
              "character": 32
            }
          ]
        },
        {
          "id": 56,
          "name": "ngaThemeOptionsToken",
          "kind": 32,
          "kindString": "Variable",
          "flags": {
            "isExported": true
          },
          "sources": [
            {
              "fileName": "src/framework/theme/theme.options.ts",
              "line": 7,
              "character": 33
            }
          ],
          "type": {
            "type": "reference",
            "name": "InjectionToken",
            "typeArguments": [
              {
                "type": "reference",
                "name": "NgaThemeOptions",
                "id": 54
              }
            ]
          },
          "defaultValue": " new InjectionToken<NgaThemeOptions>('NGA_THEME_OPTIONS')"
        }
      ],
      "groups": [
        {
          "title": "Interfaces",
          "kind": 256,
          "children": [
            54
          ]
        },
        {
          "title": "Variables",
          "kind": 32,
          "children": [
            56
          ]
        }
      ],
      "sources": [
        {
          "fileName": "src/framework/theme/theme.options.ts",
          "line": 1,
          "character": 0
        }
      ]
    },
    {
      "id": 1183,
      "name": "\"src/main\"",
      "kind": 1,
      "kindString": "External module",
      "flags": {
        "isExported": true
      },
      "originalName": "/Users/nixa/Development/Projects/Akveo/ng2-admin/src/main.ts",
      "sources": [
        {
          "fileName": "src/main.ts",
          "line": 1,
          "character": 0
        }
      ]
    },
    {
      "id": 1184,
      "name": "\"src/polyfills\"",
      "kind": 1,
      "kindString": "External module",
      "flags": {
        "isExported": true
      },
      "originalName": "/Users/nixa/Development/Projects/Akveo/ng2-admin/src/polyfills.ts",
      "comment": {
        "tags": [
          {
            "tag": "license",
            "text": "\nCopyright Akveo. All Rights Reserved.\nLicensed under the MIT License. See License.txt in the project root for license information.\n"
          }
        ]
      },
      "sources": [
        {
          "fileName": "src/polyfills.ts",
          "line": 1,
          "character": 0
        }
      ]
    },
    {
      "id": 1185,
      "name": "\"src/test\"",
      "kind": 1,
      "kindString": "External module",
      "flags": {
        "isExported": true
      },
      "originalName": "/Users/nixa/Development/Projects/Akveo/ng2-admin/src/test.ts",
      "children": [
        {
          "id": 1186,
          "name": "___karma__",
          "kind": 32,
          "kindString": "Variable",
          "flags": {},
          "sources": [
            {
              "fileName": "src/test.ts",
              "line": 21,
              "character": 21
            }
          ],
          "type": {
            "type": "instrinct",
            "name": "any"
          }
        },
        {
          "id": 1188,
          "name": "context",
          "kind": 32,
          "kindString": "Variable",
          "flags": {},
          "sources": [
            {
              "fileName": "src/test.ts",
              "line": 34,
              "character": 13
            }
          ],
          "type": {
            "type": "instrinct",
            "name": "any"
          },
          "defaultValue": " require.context('./', true, /\\.spec\\.ts$/)"
        },
        {
          "id": 1187,
          "name": "require",
          "kind": 32,
          "kindString": "Variable",
          "flags": {},
          "sources": [
            {
              "fileName": "src/test.ts",
              "line": 22,
              "character": 19
            }
          ],
          "type": {
            "type": "instrinct",
            "name": "any"
          }
        }
      ],
      "groups": [
        {
          "title": "Variables",
          "kind": 32,
          "children": [
            1186,
            1188,
            1187
          ]
        }
      ],
      "sources": [
        {
          "fileName": "src/test.ts",
          "line": 1,
          "character": 0
        }
      ]
    }
  ],
  "groups": [
    {
      "title": "External modules",
      "kind": 1,
      "children": [
        1,
        20,
        25,
        26,
        27,
        28,
        29,
        46,
        47,
        48,
        49,
        50,
        51,
        52,
        488,
        1177,
        1175,
        490,
        503,
        501,
        499,
        505,
        547,
        523,
        541,
        545,
        543,
        528,
        514,
        607,
        1180,
        1189,
        1161,
        623,
        1159,
        1043,
        991,
        1063,
        1105,
        1083,
        1119,
        1139,
        627,
        1174,
        1045,
        646,
        783,
        824,
        882,
        716,
        1002,
        679,
        93,
        143,
        146,
        150,
        182,
        244,
        300,
        57,
        185,
        307,
        322,
        91,
        349,
        395,
        324,
        401,
        423,
        426,
        484,
        487,
        73,
        86,
        53,
        1183,
        1184,
        1185
      ]
    }
  ]
};

const rdp = new TypedocParser();

// const output = rdp.parse(json);
// console.log(JSON.stringify(output));

fs.readFile('./right-examples/typedoc/output.json', (err: any, data: any) => {
  const newdoc = new TypedocParser().parse(JSON.parse(data));
  const outputObj: any = JSON.stringify(newdoc, null, 2);
  fs.writeFile('./watchOut.json', outputObj);
});










// function iter(obj: any) {
//     for (let property in obj) {
//         if (obj.hasOwnProperty(property) && obj[property] != null) {
//             if (obj[property].constructor == Object) {
//                 iter(obj[property]);
//             } else if (obj[property].constructor == Array) {
//                 for (let i = 0; i < obj[property].length; i++) {
//                     iter(obj[property][i]);
//                 }
//             } else {
//                 console.log(obj[property]);
//             }
//         }
//     }
// }