import { defineStorage } from "@aws-amplify/backend";

export const storage = defineStorage({
  name: "blogStorage",
  access: (allow) => ({
    "media/*": [
      allow.guest.to(["read"]), allow.authenticated.to(["read","write", "delete"]) // additional actions such as "write" and "delete" can be specified depending on your use case
    ],
  }),
});