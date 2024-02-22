import * as tw from "twilio";
import { RequestClient } from "twilio";
import { } from "@slack/web-api";
import * as starNano from "nano";

const client = new tw.RequestClient();

const serverScope = starNano();


function a01() {
  serverScope.relax();
}


a01();
