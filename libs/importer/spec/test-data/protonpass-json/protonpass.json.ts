import { ProtonPassJsonFile } from "../../../src/importers/protonpass/types/protonpass-json-type";

export const testData: ProtonPassJsonFile = {
  version: "1.3.1",
  userId: "REDACTED_USER_ID",
  encrypted: false,
  vaults: {
    REDACTED_VAULT_ID_A: {
      name: "Personal",
      description: "Personal vault",
      display: {
        color: 0,
        icon: 0,
      },
      items: [
        {
          itemId:
            "yZENmDjtmZGODNy3Q_CZiPAF_IgINq8w-R-qazrOh-Nt9YJeVF3gu07ovzDS4jhYHoMdOebTw5JkYPGgIL1mwQ==",
          shareId:
            "SN5uWo4WZF2uT5wIDqtbdpkjuxCbNTOIdf-JQ_DYZcKYKURHiZB5csS1a1p9lklvju9ni42l08IKzwQG0B2ySg==",
          data: {
            metadata: {
              name: "Test Login - Personal Vault",
              note: "My login secure note.",
              itemUuid: "e8ee1a0c",
            },
            extraFields: [
              {
                fieldName: "non-hidden field",
                type: "text",
                data: {
                  content: "non-hidden field content",
                },
              },
              {
                fieldName: "hidden field",
                type: "hidden",
                data: {
                  content: "hidden field content",
                },
              },
              {
                fieldName: "second 2fa secret",
                type: "totp",
                data: {
                  totpUri: "TOTPCODE",
                },
              },
            ],
            type: "login",
            content: {
              username: "Username",
              password: "Password",
              urls: ["https://example.com/", "https://example2.com/"],
              totpUri:
                "otpauth://totp/Test%20Login%20-%20Personal%20Vault:Username?issuer=Test%20Login%20-%20Personal%20Vault&secret=TOTPCODE&algorithm=SHA1&digits=6&period=30",
            },
          },
          state: 1,
          aliasEmail: null,
          contentFormatVersion: 1,
          createTime: 1689182868,
          modifyTime: 1689182868,
        },
        {
          itemId:
            "xqq_Bh8RxNMBerkiMvRdH427yswZznjYwps-f6C5D8tmKiPgMxCSPNz1BOd4nRJ309gciDiPhXcCVWOyfJ66ZA==",
          shareId:
            "SN5uWo4WZF2uT5wIDqtbdpkjuxCbNTOIdf-JQ_DYZcKYKURHiZB5csS1a1p9lklvju9ni42l08IKzwQG0B2ySg==",
          data: {
            metadata: {
              name: "My Secure Note",
              note: "Secure note contents.",
              itemUuid: "ad618070",
            },
            extraFields: [],
            type: "note",
            content: {},
          },
          state: 1,
          aliasEmail: null,
          contentFormatVersion: 1,
          createTime: 1689182908,
          modifyTime: 1689182908,
        },
        {
          itemId:
            "ZmGzd-HNQYTr6wmfWlSfiStXQLqGic_PYB2Q2T_hmuRM2JIA4pKAPJcmFafxJrDpXxLZ2EPjgD6Noc9a0U6AVQ==",
          shareId:
            "SN5uWo4WZF2uT5wIDqtbdpkjuxCbNTOIdf-JQ_DYZcKYKURHiZB5csS1a1p9lklvju9ni42l08IKzwQG0B2ySg==",
          data: {
            metadata: {
              name: "Test Card",
              note: "Credit Card Note",
              itemUuid: "d8f45370",
            },
            extraFields: [],
            type: "creditCard",
            content: {
              cardholderName: "Test name",
              cardType: 0,
              number: "1234222233334444",
              verificationNumber: "333",
              expirationDate: "012025",
              pin: "1234",
            },
          },
          state: 1,
          aliasEmail: null,
          contentFormatVersion: 1,
          createTime: 1691001643,
          modifyTime: 1691001643,
        },
        {
          itemId:
            "xqq_Bh8RxNMBerkiMvRdH427yswZznjYwps-f6C5D8tmKiPgMxCSPNz1BOd4nRJ309gciDiPhXcCVWOyfJ66ZA==",
          shareId:
            "SN5uWo4WZF2uT5wIDqtbdpkjuxCbNTOIdf-JQ_DYZcKYKURHiZB5csS1a1p9lklvju9ni42l08IKzwQG0B2ySg==",
          data: {
            metadata: {
              name: "My Deleted Note",
              note: "Secure note contents.",
              itemUuid: "ad618070",
            },
            extraFields: [],
            type: "note",
            content: {},
          },
          state: 2,
          aliasEmail: null,
          contentFormatVersion: 1,
          createTime: 1689182908,
          modifyTime: 1689182908,
        },
      ],
    },
    REDACTED_VAULT_ID_B: {
      name: "Test",
      description: "",
      display: {
        color: 4,
        icon: 2,
      },
      items: [
        {
          itemId:
            "U_J8-eUR15sC-PjUhjVcixDcayhjGuoerUZCr560RlAi0ZjBNkSaSKAytVzZn4E0hiFX1_y4qZbUetl6jO3aJw==",
          shareId:
            "OJz-4MnPqAuYnyemhctcGDlSLJrzsTnf2FnFSwxh1QP_oth9xyGDc2ZAqCv5FnqkVgTNHT5aPj62zcekNemfNw==",
          data: {
            metadata: {
              name: "Other vault login",
              note: "",
              itemUuid: "f3429d44",
            },
            extraFields: [],
            type: "login",
            content: {
              username: "other vault username",
              password: "other vault password",
              urls: [],
              totpUri: "",
            },
          },
          state: 1,
          aliasEmail: null,
          contentFormatVersion: 1,
          createTime: 1689182949,
          modifyTime: 1689182949,
        },
      ],
    },
  },
};
