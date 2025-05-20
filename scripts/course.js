const courses = [
  { code: "CSE 121b", name: "JavaScript Language", credits: 2, completed: false },
  { code: "CSE 134", name: "Web Backend Development I", credits: 2, completed: false },
  { code: "CSE 254", name: "Web Backend Development II", credits: 2, completed: false },
  { code: "WDD 130", name: "Web Fundamentals", credits: 2, completed: true },
  { code: "WDD 131", name: "Dynamic Web Fundamentals", credits: 2, completed: true },
  { code: "WDD 231", name: "Front-end Web Development I", credits: 2, completed: false },
  { code: "WDD 232", name: "Front-end Web Development II", credits: 2, completed: false },
  { code: "WDD 330", name: "Web Frontend Development III", credits: 2, completed: false },
  { code: "WDD 430", name: "Web Full-Stack Development", credits: 2, completed: false }
];

const courseSection = document.querySelector("#courses");
const totalCredits = document.querySelector("#total-credits");

function renderCourses(filteredCourses) {
  courseSection.innerHTML = "";
  let credits = 0;

  filteredCourses.forEach(course => {
    const card = document.createElement("div");
    card.classList.add("course-card");
    if (course.completed) card.classList.add("completed");

    card.innerHTML = `<h3>${course.code}</h3><p>${course.name}</p><p>Credits: ${course.credits}</p>`;
    courseSection.appendChild(card);

    credits += course.credits;
  });

  totalCredits.textContent = `Total Credits: ${credits}`;
}

document.querySelector("#all").addEventListener("click", () => renderCourses(courses));
document.querySelector("#wdd").addEventListener("click", () => {
  const wddCourses = courses.filter(course => course.code.startsWith("WDD"));
  renderCourses(wddCourses);
});
document.querySelector("#cse").addEventListener("click", () => {
  const cseCourses = courses.filter(course => course.code.startsWith("CSE"));
  renderCourses(cseCourses);
});

renderCourses(courses); // Default load
