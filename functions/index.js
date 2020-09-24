const functions = require("firebase-functions");

const express = require("express");

const cors = require("cors");

// hi people use this link to sending money not to fuck me

const stripe = require("stripe")(
  "sk_test_51HUbuHJpKggh098dnJ2SOsTUtelvr5HTjOUINXdelYPa6d40Fc8ukpPjeV4fMe406Bn7JQqYLCopMqROROnpSzTa00MF0dCWF2"
);
