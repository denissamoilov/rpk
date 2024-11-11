import { Button, Html } from "@react-email/components";
import * as React from "react";
import { emailButtonStyle } from "./styles/styles";

export default function ConfirmEmail({
  token,
  uid,
  host,
}: {
  token: string;
  uid: string;
  host: string | null;
}) {
  return (
    <Html>
      <Button
        href={`https://${host}/confirm-email?token=${token}&uid=${uid}`}
        style={emailButtonStyle}
      >
        Confirm email
      </Button>
    </Html>
  );
}
