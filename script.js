const profiles = [
  {
    leftName: "Aybüke Pusat",
    leftTitle: "Founder (Kurucu)",
    rightName: "Maraşlı",
    rightTitle: "Owner (Yönetici)"
  },
  // Buraya başka profiller ekleyebilirsin
];

const container = document.getElementById("profiles-container");

profiles.forEach(profile => {
  const card = document.createElement("div");
  card.classList.add("profile-card");

  card.innerHTML = `
    <div class="profile-left">
      <div class="name">${profile.leftName}</div>
      <div class="title">${profile.leftTitle}</div>
    </div>
    <div class="profile-right">
      <div class="name">${profile.rightName}</div>
      <div class="title">${profile.rightTitle}</div>
    </div>
  `;

  container.appendChild(card);
});
