
const toggleSkillsButton = document.getElementById("toggle-skills");
const skillsSection = document.getElementById("skills");

toggleSkillsButton?.addEventListener("click", () => {
  if (skillsSection) {
    const isHidden = skillsSection.style.display === "none";
    skillsSection.style.display = isHidden ? "block" : "none";
  }
});
