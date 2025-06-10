const friends = [
  { id: "4E8", name: "Polukonda Yaswitha", bio: "Software Developer", image: "https://res.cloudinary.com/dabxj1smb/image/upload/c_crop,w_150,h_267,ar_9:16,g_auto/v1749538301/5382c879-5b58-43c7-81ff-044415f98c9b_xiq", hobbies: ["Coding", "Speaker"] },
  { id: "4E9", name: "Pyla Samitha", bio: "Preparing for GATE", image: "https://via.placeholder.com/300x200?text=Ishu", hobbies: ["Coding", "Gaming"] },
  { id: "4F0", name: "Polisetty Nikhitha Sowmya", bio: "Working as a Web Developer", image: "https://via.placeholder.com/300x200?text=Ravi", hobbies: ["React", "Movies"] },
  { id: "4F1", name: "Dasam Durga Aparna Devi", bio: "Data Scientist", image: "https://via.placeholder.com/300x200?text=Sneha", hobbies: ["Python", "ML"] },
  { id: "4F2", name: "Ankit", bio: "Intern at Infosys", image: "https://via.placeholder.com/300x200?text=Ankit", hobbies: ["Cricket", "Blogging"] },
  { id: "4F3", name: "Pooja", bio: "Volunteering in NGO", image: "https://via.placeholder.com/300x200?text=Pooja", hobbies: ["Helping", "Teaching"] },
  { id: "4F4", name: "Yanamala Maharshi", bio: "Freelancing UX Designer", image: "https://via.placeholder.com/300x200?text=Nikhil", hobbies: ["Sketching", "UX"] },
  { id: "4F5", name: "Yellaboyina Suryateja", bio: "CEO Microsoft", image: "https://via.placeholder.com/300x200?text=Divya", hobbies: ["Reading", "Team lead"] },
  { id: "4F6", name: "Ruben Joy", bio: "Mechanical Intern", image: "https://via.placeholder.com/300x200?text=Manoj", hobbies: ["Robotics", "CAD"] },
  { id: "4F7", name: "Ramoju Mahendra sai", bio: "HR Assistant", image: "https://via.placeholder.com/300x200?text=Shruti", hobbies: ["People Skills", "Dance"] },
  { id: "4F8", name: "Penumarthi Koushik Sai Raghav", bio: "Full Stack Learner", image: "https://via.placeholder.com/300x200?text=Kiran", hobbies: ["JavaScript", "SQL"] },
  { id: "4F9", name: "Kanchi Venkata Karthik", bio: "Startup Founder", image: "https://via.placeholder.com/300x200?text=Rahul", hobbies: ["Business", "AI"] },
  { id: "4G0", name: "Rayadu Chaitany", bio: "Fashion Blogger", image: "https://via.placeholder.com/300x200?text=Megha", hobbies: ["Fashion", "Photos"] },
  { id: "4G1", name: "Penky Nanda Sri Gopal", bio: "YouTuber", image: "https://via.placeholder.com/300x200?text=Surya", hobbies: ["Editing", "Vlogging"] },
  { id: "4G2", name: "Kowsalya", bio: "Bank PO", image: "https://via.placeholder.com/300x200?text=Nisha", hobbies: ["Maths", "Reading"] },
  { id: "4G3", name: "Sorapalli Yaswanth Pallav", bio: "Production Manager", image: "https://via.placeholder.com/300x200?text=Vinay", hobbies: ["Planning", "Music"] },
  { id: "4G4", name: "Dasam Harisaran", bio: "Software Developer Intern", image: "https://via.placeholder.com/300x200?text=Anusha", hobbies: ["Reading", "Coding"] },
  { id: "4G5", name: "Devu Lowrence", bio: "Product Designer", image: "https://via.placeholder.com/300x200?text=Siddharth", hobbies: ["Structures", "Sketching"] }
];

const listContainer = document.getElementById("friend-list");
const searchInput = document.getElementById("searchInput");

function displayFriends(filter = "") {
  listContainer.innerHTML = "";
  const filtered = friends.filter(friend =>
    friend.id.toLowerCase().includes(filter.toLowerCase())
  );

  filtered.forEach(friend => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${friend.image}" alt="${friend.name}">
      <h3>${friend.name} (${friend.id})</h3>
      <p>${friend.bio}</p>
      <p><strong>Hobbies:</strong> ${friend.hobbies.join(", ")}</p>
    `;
    listContainer.appendChild(card);
  });
}

searchInput.addEventListener("input", (e) => {
  displayFriends(e.target.value);
});

displayFriends();
