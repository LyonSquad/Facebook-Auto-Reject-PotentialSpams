// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      2025-03-09
// @description  try to take over the world!
// @author       Yashvir Gaming
// @match        https://www.facebook.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=facebook.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Funktion to find and to click the "Decline" button
    function clickRejectButton() {
        // Trying to find the button with the text "Decline"
        // NOTE: If your Facebook is in another language, change "Decline" below, to match the text on the button on your Facebook
        let buttons = document.querySelectorAll('div[aria-label="Decline"]');

        // If the button exists, click it
        buttons.forEach(button => {
            button.click();
            console.log("The Decline button was pressed");
        });
    }

    // Function to scroll to the bottom of the page
    function scrollToBottom() {
        window.scrollTo(0, document.body.scrollHeight);
        console.log("Scrolling...");
    }

    // Run the function
    clickRejectButton();

    // Delay
    setInterval(() => {
        scrollToBottom();
        clickRejectButton();
    }, 2000);

    // Observe the DOM for changes and click on the button if it appears again
    const observer = new MutationObserver(() => {
        clickRejectButton();
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });


})();
