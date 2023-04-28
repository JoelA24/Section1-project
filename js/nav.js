"use strict";

/******************************************************************************
 * Handling navbar clicks and updating navbar
 */

/** Show main list of all stories when click site name */

function navAllStories(e) {
  console.debug("navAllStories", e);
  hidePageComponents();
  putStoriesOnPage();
}

$body.on("click", "#nav-all", navAllStories);

// Show Submit form on click "submit"

function navSubmitStoryClick(e) {
  console.debug("navSubmitStoryClick", e);
  hidePageComponents();
  $allStoiresList.show();
  $submitForm.show();
}

$navSubmitStory.on("click", navSubmitStoryClick);

//  Show favorites on click "favorite"

function navFavoritesClick(e) {
  console.debug("navFavoritesClick", e);
  hidePageComponents();
  putFavoritesListOnPage();
}

$body.on("click", "#nav-favorites", navFavoritesClick);

// Show OP stories on click "my stories"

function navMyStories(e){
  console.debug("navMyStories", e)
  hidePageComponents();
  putOwnStoriesOnPage();
  $ownStories.show();
}

$body.on("click", "nav-my-stories", navMyStories);

/** Show login/signup on click on "login" */

function navLoginClick(e) {
  console.debug("navLoginClick", e);
  hidePageComponents();
  $loginForm.show();
  $signupForm.show();
  $storiesContainer.hide();
}

$navLogin.on("click", navLoginClick);

// Show only profile on click "profile"

function navProfileClick(e) {
  console.debug("navProfileClick", e);
  hidePageComponents();
  $userProfile.show();
}

$navUserProfile.on("click", navProfileClick);

/** When a user first logins in, update the navbar to reflect that. */

function updateNavOnLogin() {
  console.debug("updateNavOnLogin");
  $(".main-nav-links").show();
  $navLogin.hide();
  $navLogOut.show();
  $navUserProfile.text(`${currentUser.username}`).show();
}
