const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
    likeIconSrc: "images/icon-heart.png",
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
    likeIconSrc: "images/icon-heart.png",
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
    likeIconSrc: "images/icon-heart.png",
  },
];
const likedPosts = [false, false, false]; // Array to keep track of liked posts

function renderPosts() {
  const postContainer = document.getElementById("post");
  postContainer.innerHTML = ""; // Clear existing content

  /*Loop on posts to render it */
  for (i = 0; i < posts.length; i++) {
    postContainer.innerHTML += `
    <div class="user-details">
          <img
            class="user-avatar"
            src=${posts[i].avatar}
            alt=" ${posts[i].name} profile picture"
          />
          <div class="user-info">
            <p class="bold-text"> ${posts[i].name} </p>
            <p class="small-text">${posts[i].location}</p>
          </div>
    </div>

    <div class="post-content">
          <img
            class="post-image"
            src=${posts[i].post}
            alt="${posts[i].name} post image"
          />
    </div>

    <div class="post-actions">
          <img
            class="action-icon like-icon"
            data-index=${i}
            src=${posts[i].likeIconSrc}
            alt="like icon"
          />
          <img
            class="action-icon"
            src="images/icon-comment.png"
            alt="comment icon"
          />
          <img 
          class="action-icon" 
          src="images/icon-dm.png" 
          alt="share icon" />

          <p class="text-indent bold-text"> ${posts[i].likes} likes</p>
    </div>

    <div class="post-caption text-indent small-text">
          <p>
            <span class="bold-text">${posts[i].username} </span> ${posts[i].comment}
          </p>
    </div>`;
  }
  attachLikeListeners();
}

function attachLikeListeners() {
  const likeIcons = document.querySelectorAll(".like-icon");
  const likeImages = document.querySelectorAll(".post-image");
  let lastTap = 0;

  // Add click event listeners to each like icon
  likeIcons.forEach((icon) => {
    icon.addEventListener("click", function () {
      const postIndex = parseInt(icon.getAttribute("data-index"));
      if (likedPosts[postIndex]) {
        likedPosts[postIndex] = false; // Toggle like off
        posts[postIndex].likes -= 1; // Decrement likes
        posts[postIndex].likeIconSrc = "images/icon-heart.png"; // Change icon to unliked state
      } else {
        likedPosts[postIndex] = true; // Toggle like off
        posts[postIndex].likes += 1; // Decrement likes
        posts[postIndex].likeIconSrc = "images/liked-heart.png"; // Change icon to unliked state
      }

      renderPosts(); // Re-render posts to update likes count
    });
  });

  //Add double click event listeners to each post image
  likeImages.forEach((image, index) => {
    image.addEventListener("dblclick", function () {
      if (!likedPosts[index]) {
        likedPosts[index] = true; // Toggle like on
        posts[index].likes += 1; // Increment likes
        posts[index].likeIconSrc = "images/liked-heart.png"; // Change icon to liked state
      } else {
        likedPosts[index] = false; // Toggle like off
        posts[index].likes -= 1; // Decrement likes
        posts[index].likeIconSrc = "images/icon-heart.png"; // Change icon to unliked state
      }
      renderPosts(); // Re-render posts to update likes count
    });
  });

  // Add touchend event listeners for double tap detection
  likeImages.forEach((image, index) => {
    image("touchend", function (e) {
      const currentTime = new Date().getTime();
      const tapLength = currentTime - lastTap;

      if (tapLength < 300 && tapLength > 0) {
        // It's a double tap
        console.log("Double tap detected!");
        //increase likes)
        if (!likedPosts[index]) {
          likedPosts[index] = true; // Toggle like on
          posts[index].likes += 1; // Increment likes
          posts[index].likeIconSrc = "images/liked-heart.png"; // Change icon to liked state
        } else {
          likedPosts[index] = false; // Toggle like off
          posts[index].likes -= 1; // Decrement likes
          posts[index].likeIconSrc = "images/icon-heart.png"; // Change icon to unliked state
        }
        renderPosts(); // Re-render posts to update likes count
      }

      lastTap = currentTime;
    });
  });
}

//Main program
renderPosts();
