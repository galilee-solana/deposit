/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/depo.json`.
 */
export type Depo = {
  "address": "coUnmi3oBUtwtd9fjeAvSsJssXh5A5xyPbhpewyzRVF",
  "metadata": {
    "name": "depo",
    "version": "0.1.0",
    "spec": "0.1.0",
    "description": "Created with Anchor"
  },
  "instructions": [
    {
      "name": "addDepositor",
      "discriminator": [
        115,
        182,
        221,
        66,
        112,
        99,
        44,
        207
      ],
      "accounts": [
        {
          "name": "escrow",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  101,
                  115,
                  99,
                  114,
                  111,
                  119
                ]
              },
              {
                "kind": "arg",
                "path": "escrowId"
              }
            ]
          }
        },
        {
          "name": "depositor",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  100,
                  101,
                  112,
                  111,
                  115,
                  105,
                  116,
                  111,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "escrow"
              },
              {
                "kind": "arg",
                "path": "wallet"
              }
            ]
          }
        },
        {
          "name": "initializer",
          "writable": true,
          "signer": true,
          "relations": [
            "escrow"
          ]
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "escrowId",
          "type": {
            "array": [
              "u8",
              16
            ]
          }
        },
        {
          "name": "wallet",
          "type": "pubkey"
        }
      ]
    },
    {
      "name": "addMinimumAmount",
      "discriminator": [
        102,
        225,
        199,
        232,
        81,
        3,
        105,
        30
      ],
      "accounts": [
        {
          "name": "escrow",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  101,
                  115,
                  99,
                  114,
                  111,
                  119
                ]
              },
              {
                "kind": "arg",
                "path": "escrowId"
              }
            ]
          }
        },
        {
          "name": "minimumAmount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  105,
                  110,
                  105,
                  109,
                  117,
                  109,
                  95,
                  97,
                  109,
                  111,
                  117,
                  110,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "escrow"
              }
            ]
          }
        },
        {
          "name": "initializer",
          "writable": true,
          "signer": true,
          "relations": [
            "escrow"
          ]
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "escrowId",
          "type": {
            "array": [
              "u8",
              16
            ]
          }
        },
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "addRecipient",
      "discriminator": [
        207,
        170,
        166,
        28,
        210,
        186,
        242,
        145
      ],
      "accounts": [
        {
          "name": "escrow",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  101,
                  115,
                  99,
                  114,
                  111,
                  119
                ]
              },
              {
                "kind": "arg",
                "path": "escrowId"
              }
            ]
          }
        },
        {
          "name": "recipient",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  99,
                  105,
                  112,
                  105,
                  101,
                  110,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "escrow"
              },
              {
                "kind": "arg",
                "path": "wallet"
              }
            ]
          }
        },
        {
          "name": "initializer",
          "writable": true,
          "signer": true,
          "relations": [
            "escrow"
          ]
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "escrowId",
          "type": {
            "array": [
              "u8",
              16
            ]
          }
        },
        {
          "name": "wallet",
          "type": "pubkey"
        },
        {
          "name": "percentage",
          "type": "u16"
        }
      ]
    },
    {
      "name": "createEscrow",
      "discriminator": [
        253,
        215,
        165,
        116,
        36,
        108,
        68,
        80
      ],
      "accounts": [
        {
          "name": "escrow",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  101,
                  115,
                  99,
                  114,
                  111,
                  119
                ]
              },
              {
                "kind": "arg",
                "path": "escrowId"
              }
            ]
          }
        },
        {
          "name": "signer",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "escrowId",
          "type": {
            "array": [
              "u8",
              16
            ]
          }
        },
        {
          "name": "name",
          "type": "bytes"
        },
        {
          "name": "description",
          "type": "bytes"
        }
      ]
    },
    {
      "name": "depositEscrow",
      "discriminator": [
        226,
        112,
        158,
        176,
        178,
        118,
        153,
        128
      ],
      "accounts": [
        {
          "name": "escrow",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  101,
                  115,
                  99,
                  114,
                  111,
                  119
                ]
              },
              {
                "kind": "arg",
                "path": "escrowId"
              }
            ]
          }
        },
        {
          "name": "depositor",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  100,
                  101,
                  112,
                  111,
                  115,
                  105,
                  116,
                  111,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "escrow"
              },
              {
                "kind": "account",
                "path": "signer"
              }
            ]
          }
        },
        {
          "name": "signer",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "escrowId",
          "type": {
            "array": [
              "u8",
              16
            ]
          }
        },
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "releaseEscrow",
      "discriminator": [
        146,
        253,
        129,
        233,
        20,
        145,
        181,
        206
      ],
      "accounts": [
        {
          "name": "escrow",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  101,
                  115,
                  99,
                  114,
                  111,
                  119
                ]
              },
              {
                "kind": "arg",
                "path": "escrowId"
              }
            ]
          }
        },
        {
          "name": "initializer",
          "writable": true,
          "signer": true,
          "relations": [
            "escrow"
          ]
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "escrowId",
          "type": {
            "array": [
              "u8",
              16
            ]
          }
        }
      ]
    },
    {
      "name": "removeDepositor",
      "discriminator": [
        249,
        204,
        46,
        217,
        104,
        32,
        111,
        42
      ],
      "accounts": [
        {
          "name": "escrow",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  101,
                  115,
                  99,
                  114,
                  111,
                  119
                ]
              },
              {
                "kind": "arg",
                "path": "escrowId"
              }
            ]
          }
        },
        {
          "name": "depositor",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  100,
                  101,
                  112,
                  111,
                  115,
                  105,
                  116,
                  111,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "escrow"
              },
              {
                "kind": "arg",
                "path": "wallet"
              }
            ]
          }
        },
        {
          "name": "initializer",
          "writable": true,
          "signer": true,
          "relations": [
            "escrow"
          ]
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "escrowId",
          "type": {
            "array": [
              "u8",
              16
            ]
          }
        },
        {
          "name": "wallet",
          "type": "pubkey"
        }
      ]
    },
    {
      "name": "removeMinimumAmount",
      "discriminator": [
        7,
        0,
        111,
        90,
        190,
        141,
        54,
        101
      ],
      "accounts": [
        {
          "name": "escrow",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  101,
                  115,
                  99,
                  114,
                  111,
                  119
                ]
              },
              {
                "kind": "arg",
                "path": "escrowId"
              }
            ]
          }
        },
        {
          "name": "minimumAmount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  109,
                  105,
                  110,
                  105,
                  109,
                  117,
                  109,
                  95,
                  97,
                  109,
                  111,
                  117,
                  110,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "escrow"
              }
            ]
          }
        },
        {
          "name": "initializer",
          "writable": true,
          "signer": true,
          "relations": [
            "escrow"
          ]
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "escrowId",
          "type": {
            "array": [
              "u8",
              16
            ]
          }
        }
      ]
    },
    {
      "name": "removeRecipient",
      "discriminator": [
        155,
        185,
        10,
        53,
        111,
        57,
        100,
        149
      ],
      "accounts": [
        {
          "name": "escrow",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  101,
                  115,
                  99,
                  114,
                  111,
                  119
                ]
              },
              {
                "kind": "arg",
                "path": "escrowId"
              }
            ]
          }
        },
        {
          "name": "recipient",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  114,
                  101,
                  99,
                  105,
                  112,
                  105,
                  101,
                  110,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "escrow"
              },
              {
                "kind": "arg",
                "path": "wallet"
              }
            ]
          }
        },
        {
          "name": "initializer",
          "writable": true,
          "signer": true,
          "relations": [
            "escrow"
          ]
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "escrowId",
          "type": {
            "array": [
              "u8",
              16
            ]
          }
        },
        {
          "name": "wallet",
          "type": "pubkey"
        }
      ]
    },
    {
      "name": "startEscrow",
      "discriminator": [
        46,
        74,
        237,
        213,
        33,
        253,
        58,
        195
      ],
      "accounts": [
        {
          "name": "escrow",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  101,
                  115,
                  99,
                  114,
                  111,
                  119
                ]
              },
              {
                "kind": "arg",
                "path": "escrowId"
              }
            ]
          }
        },
        {
          "name": "initializer",
          "writable": true,
          "signer": true,
          "relations": [
            "escrow"
          ]
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "escrowId",
          "type": {
            "array": [
              "u8",
              16
            ]
          }
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "depositor",
      "discriminator": [
        219,
        74,
        92,
        245,
        101,
        149,
        45,
        97
      ]
    },
    {
      "name": "escrow",
      "discriminator": [
        31,
        213,
        123,
        187,
        186,
        22,
        218,
        155
      ]
    },
    {
      "name": "minimumAmount",
      "discriminator": [
        246,
        81,
        90,
        144,
        94,
        202,
        225,
        58
      ]
    },
    {
      "name": "recipient",
      "discriminator": [
        80,
        186,
        47,
        196,
        232,
        251,
        21,
        148
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "nameTooLong",
      "msg": "Escrow name is too long. Max length: 100 bytes."
    },
    {
      "code": 6001,
      "name": "descriptionTooLong",
      "msg": "Escrow description is too long. Max length: 200 bytes."
    },
    {
      "code": 6002,
      "name": "unauthorizedRecipientModifier",
      "msg": "Unauthorized to add or remove recipient"
    },
    {
      "code": 6003,
      "name": "unauthorizedDepositorModifier",
      "msg": "Unauthorized to add or remove depositor"
    },
    {
      "code": 6004,
      "name": "escrowNotDraft",
      "msg": "Escrow must be in Draft status to modify it"
    },
    {
      "code": 6005,
      "name": "escrowNotStarted",
      "msg": "Escrow must be in Draft status to modify it"
    },
    {
      "code": 6006,
      "name": "noRecipients",
      "msg": "No recipients in escrow"
    },
    {
      "code": 6007,
      "name": "noDepositors",
      "msg": "No depositors in escrow"
    },
    {
      "code": 6008,
      "name": "moduleAlreadyExists",
      "msg": "This module type already exists."
    },
    {
      "code": 6009,
      "name": "moduleDoesntExist",
      "msg": "This module type doesn't exist."
    },
    {
      "code": 6010,
      "name": "invalidDepositAmount",
      "msg": "Invalid deposit amount."
    },
    {
      "code": 6011,
      "name": "unauthorizedDepositor",
      "msg": "Unauthorized depositor."
    },
    {
      "code": 6012,
      "name": "maxPercentage",
      "msg": "Max percentage is 10 0000 (represents 100%)"
    },
    {
      "code": 6013,
      "name": "escrowPercentageFull",
      "msg": "Insufficient remaining percentage in the escrow"
    }
  ],
  "types": [
    {
      "name": "depositor",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "escrow",
            "type": "pubkey"
          },
          {
            "name": "wallet",
            "type": "pubkey"
          },
          {
            "name": "depositedAmount",
            "type": "u64"
          },
          {
            "name": "wasRefunded",
            "type": "bool"
          },
          {
            "name": "isInitialized",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "escrow",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "id",
            "type": {
              "array": [
                "u8",
                16
              ]
            }
          },
          {
            "name": "initializer",
            "type": "pubkey"
          },
          {
            "name": "name",
            "type": {
              "array": [
                "u8",
                100
              ]
            }
          },
          {
            "name": "description",
            "type": {
              "array": [
                "u8",
                200
              ]
            }
          },
          {
            "name": "depositedAmount",
            "type": "u64"
          },
          {
            "name": "withdrawnAmount",
            "type": "u64"
          },
          {
            "name": "remainingPercentage",
            "type": "u16"
          },
          {
            "name": "isPublicDeposit",
            "type": "bool"
          },
          {
            "name": "depositorsCount",
            "type": "u32"
          },
          {
            "name": "recipientsCount",
            "type": "u32"
          },
          {
            "name": "modules",
            "type": {
              "vec": {
                "defined": {
                  "name": "moduleType"
                }
              }
            }
          },
          {
            "name": "status",
            "type": {
              "defined": {
                "name": "status"
              }
            }
          },
          {
            "name": "createdAt",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "minimumAmount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "minAmount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "moduleType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "timeLock"
          },
          {
            "name": "expiryFallback"
          },
          {
            "name": "singleApproval"
          },
          {
            "name": "multisigApproval"
          },
          {
            "name": "targetAmount"
          },
          {
            "name": "minimumAmount"
          }
        ]
      }
    },
    {
      "name": "recipient",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "escrow",
            "type": "pubkey"
          },
          {
            "name": "wallet",
            "type": "pubkey"
          },
          {
            "name": "percentage",
            "type": "u16"
          },
          {
            "name": "hasWithdrawn",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "status",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "draft"
          },
          {
            "name": "started"
          },
          {
            "name": "released"
          },
          {
            "name": "cancelled"
          },
          {
            "name": "expired"
          }
        ]
      }
    }
  ]
};
