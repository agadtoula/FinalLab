document.addEventListener("DOMContentLoaded", function() {
    $(document).foundation();
  
    // JavaScript for skill bars animation
    const skillBars = document.querySelectorAll(".skill-bar-fill");
  
    skillBars.forEach(skillBar => {
      const skillLevel = skillBar.getAttribute("data-skill");
      skillBar.style.width = skillLevel + "%";
    });
  });
  