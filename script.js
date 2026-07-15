/* ==========================================
   SAM ENVIRO
   Homepage Script
========================================== */

/* ==========================================
   GOOGLE APPS SCRIPT WEB APP URLS
========================================== */

const ETP_URL =
"https://script.google.com/macros/s/AKfycbyL5YI8v7Fyr5k16tt6rAvj0AkXfzr9Kv-DLfQNR3qyix64UoA-KB2A3VbznwPXjljO/exec";

const STP_URL =
"https://script.google.com/macros/s/AKfycbzXvY4yFLel8pLV1qEJGjjew7MLThFfVrpOvdjtFz_DaXeG7Ms_P0FhAzUDizBHTO-8uQ/exec";

const ETPRO_URL =
"https://script.google.com/macros/s/AKfycbx_jQaQymr6mdrml5VowoGryk_jvgcB-RSVXZWG66jo_ga2kZAPS41bJqq4sFAayK9_/exec";

const RO_URL =
"https://script.google.com/macros/s/AKfycbxL2WCse4PXSWBtVhCSbzaJBb0NAfiP3-d_M8bB2p6cHguVd8Y2pg2OFTN1Zn_UvhvhMw/exec";


/* ==========================================
   OPEN REPORT FORMS
========================================== */

function openETP() {

    window.location.href = ETP_URL;

}

function openSTP() {

    window.location.href = STP_URL;

}

function openETPRO() {

    window.location.href = ETPRO_URL;

}

function openRO() {

    window.location.href = RO_URL;

}

/* ==========================================
   PAGE LOADED
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    console.log("SAM ENVIRO Dashboard Loaded");

});
