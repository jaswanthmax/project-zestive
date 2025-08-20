// utils/castStore.js

// Movie details for each movie ID
const movieDetails = {
  1: {
    synopsis: "Deva, a former gold smuggler, seeks to regain his past glory by reviving his old gang with stolen technology hidden in vintage golden watches, leading to unintended consequences.",
    cast: [
      { name: "Rajni", image: "/cast/Rajni-44ee5790-901f-11ed-bd95-b7350954b20c.avif" },
      { name: "Nagarjuna Akkineni", image: "/cast/Nagarjuna Akkineni  (1)-31a12920-792d-11f0-bf18-ef07befd2b97.avif" },
      { name: "Sathyaraj", image: "/cast/Sathyaraj_ptqo8h-da38f040-aaf8-11ee-a5bf-d57c26f93d70.avif" },
      { name:"Upendra",image:"/cast/Upendra-1e097ad0-e414-11ed-82e8-cf24b6293ec4.avif"},
      { name:"soubin shahir",image:"/cast/soubin-shahir-63133110-6284-11ec-8882-372594f976ce.avif"},
      { name:"Shrutihasan",image:"/cast/Shrutihasan-bb38c4c0-7df6-11ed-bf27-a3e7fc56533c.avif"},
    ],
    trailer: "/trailers/coolie-trailer.mp4", // Path to the trailer
    genres: "Action, Thriller",  // Genres of the movie
    posters: ["/poster/1-b93bf8c0-6c30-11ef-95ec-8b48e63e98bb.avif", "/poster/2-ba7f4e30-6c30-11ef-95ec-8b48e63e98bb.avif","/poster/3-b9f73270-6c30-11ef-b7c6-e32e4945e313.avif","/poster/4-bb13c600-6c30-11ef-938e-3573cc141990.avif","/poster/5-baf45720-6c30-11ef-bb77-b3f6f9d1a8a9.avif","/poster/6-ba9c9a30-6c30-11ef-8165-49ab427cc19b.avif"]  // Paths to posters
  },
  
  2: {
    synopsis: "Mister Fantastic, Invisible Woman, Human Torch and the Thing face their most daunting challenge yet as they defend Earth from Galactus and Silver Surfer.",
    cast: [
      { name: "Ebon Moss", image: "/cast/The-Fantestic4/Ebon-Moss-4ab3cde0-a0e4-11ef-bcb4-756b1856d2eb.avif" },
      { name: "Joseph Quinn", image: "/cast/The-Fantestic4/Joseph-Quinn-1323be20-87b3-11ef-80ee-5d6ff5e29b7e.avif" },
      { name: "Juli", image: "/cast/The-Fantestic4/Juli-a66b5db0-6ea8-11ef-a448-892076225fa2.avif" },
      { name:"Pedro Pascal",image:"/cast/The-Fantestic4/Pedro-Pascal.avif"},
      { name:"ralph-ineson",image:"/cast/The-Fantestic4/ralph-ineson-8688cf67-3510-4cdf-b9cd-42d6d4b0a22f.avif"},
      { name:"Vanessa-Kirby",image:"/cast/The-Fantestic4/Vanessa-Kirby.avif"},
    ],
    trailer: "/trailers/revolution-trailer.mp4",
    genres: "Drama, War",
    posters: ["/poster/TheFantestic4/1-3cb52b40-66c2-11f0-b49e-0daac2dae3b7.avif", "/poster/TheFantestic4/2-3cbe7a10-66c2-11f0-860b-0123967fd46d.avif","/poster/TheFantestic4/3-3cba0d40-66c2-11f0-b49e-0daac2dae3b7.avif" ,"/poster/TheFantestic4/4-3cb1cfe0-66c2-11f0-860b-0123967fd46d.avif"]
  },
  3: {
    synopsis: "Mahavatar Narsimha (2025) is an acclaimed animated film depicting the mythological story of Prahlada, unwavering in devotion despite his tyrant father Hiranyakashipu's cruelty. Vishnu's Narasimha avatar ultimately defeats the demon king, restoring cosmic balance.",
    cast: [
      { name: "Adithay Raj Sharama", image: "/cast/Mahavatar Narsimha/Mahavatar Narsimha -3c7ccf00-75dd-11f0-bf18-ef07befd2b97.webp" },
      
    ],
    trailer: "/trailers/revolution-trailer.mp4",
    genres: "Drama, War",
    posters: ["/poster/Mahavatar-Narsimha/1_Mahavatar-Narsimha_Poster-03658790-580d-11f0-8c69-e1cfd333c047.avif", "/poster/Mahavatar-Narsimha/2_Mahavatar-Narsimha_Poster-03719580-580d-11f0-b03a-f9f12779d145.avif","/poster/Mahavatar-Narsimha/3_Mahavatar-Narsimha_Poster-03747bb0-580d-11f0-8c69-e1cfd333c047.avif","/poster/Mahavatar-Narsimha4_Mahavatar-Narsimha_Poster-03739150-580d-11f0-8c69-e1cfd333c047.avif"]
  },
  4: {
    synopsis: "In the 1990s, Sonny Hayes was Formula 1's most promising driver until an accident on the track nearly ended his career. Thirty years later, the owner of a struggling Formula 1 team convinces Sonny to return to racing and become the best in the world. Driving alongside the team's hotshot rookie, Sonny soon learns that the road to redemption is not something you can travel alone..",
    cast: [
      { name: "Brad Pitt", image: "/cast/Brad-Pitt-87d374ea-cf67-47b9-a0aa-be00489436ef.avif" },
      { name: "Damson Idris" , image: "/cast/Damson-Idris-c8f9fc70-b7b3-11ef-b2e6-3b922ebbcf80.avif" },
      {name: "Ed Skrein",  image:"/cast/Ed-Skrein-151e5894-16f0-4e0a-9aad-eef59fb90ae3.avif"},
      {name: "Javierr",  image:"/cast/Javierr-73b85010-fc8d-11ec-803e-8fb9a9524c83.avif"},
      {name: "Tobias Menzies",  image:"/cast/Tobias-Menzies-09d44100-b7ba-11ef-b2e6-3b922ebbcf80.avif"},
      {name: "Kerry-Condon",  image:"/cast/Kerry-Condon.avif"},
      {name: "Kim Bodnia",  image:"/cast/Kim Bodnia-c34f9fb0-308e-11f0-bc9c-3bf58d8d4fbd.avif"}
    ],
    trailer: "/trailers/revolution-trailer.mp4",
    genres: "Action,Sports",
    posters: ["/poster/1-3b3471c0-41ee-11f0-aa9f-8fefdb33bbbf.avif", "/poster/2-3b33ae70-41ee-11f0-aa9f-8fefdb33bbbf.avif","/poster/gallery_0000_F23-3b2e7e50-41ee-11f0-aa9f-8fefdb33bbbf.avif","/poster/gallery_0001_F13-3b29c360-41ee-11f0-aa9f-8fefdb33bbbf.avif"]
  },

  5: {
    synopsis: "An Indian soldier is assigned to eliminate his former mentor and he must keep his wits about him if he is to be successful in his mission; when the two men collide, it results in a barrage of battles and bullets.",
    cast: [
      { name: "anil", image: "/cast/war/anil-0bbce8b0-e03d-11ed-854b-13a7efeb6ef9.avif" },
      { name: "Arista Mehta", image: "/cast/war/Arista Mehta -642d6fe0-7a7f-11f0-8682-13bafe896827.avif" },
      { name: "Sathyaraj", image: "/cast/war/ashu-246ba270-79c4-11f0-8de0-9d1c38983d05.avif" },
      { name: "Hari", image: "/cast/war/Hri-3d91bc60-3b35-11ed-95c2-d9478708d78e.avif" },
      { name: "jr-ntr", image: "/cast/war/jr-ntr.avif" },
      { name: "Sathyaraj", image: "/cast/war/K. C. Shankar -2df854d0-7a7f-11f0-8df3-db01d1baa444.avif" }
    ],
    trailer: "/trailers/coolie-trailer.mp4", // Path to the trailer
    genres: "Action, Thriller",  // Genres of the movie
    posters: ["/poster/War/WAR2_Poster-e318ca10-6225-11f0-a47d-892349f87030.avif"]  // Paths to posters
  },
  
  6: {
    synopsis: "A gripping story about a political revolution set in a war-torn country.",
    cast: [
      { name: "Actor A", image: "/images/actor-a.jpg" },
      { name: "Actor B", image: "/images/actor-b.jpg" }
    ],
    trailer: "/trailers/revolution-trailer.mp4",
    genres: "Drama, War",
    posters: ["/images/poster3.jpg", "/images/poster4.jpg"]
  },
  7: {
    synopsis: "A gripping story about a political revolution set in a war-torn country.",
    cast: [
      { name: "Actor A", image: "/images/actor-a.jpg" },
      { name: "Actor B", image: "/images/actor-b.jpg" }
    ],
    trailer: "/trailers/revolution-trailer.mp4",
    genres: "Drama, War",
    posters: ["/images/poster3.jpg", "/images/poster4.jpg"]
  },
  8: {
    synopsis: "Zora Bennett leads a team of skilled operatives to the most dangerous place on Earth, an island research facility for the original Jurassic Park. Their mission is to secure genetic material from dinosaurs whose DNA can provide life-saving benefits to mankind. As the top-secret expedition becomes more and more risky, they soon make a sinister, shocking discovery that's been hidden from the world for decades.",
    cast: [
      
      { name: "Scarlett Johansson", image: "/cast/Scarlett-Johansson.avif" },
      { name: "Rupert-Friend", image: "/cast/Rupert-Friend-77a4f07e-8b31-4167-b5df-6add7dd0fdf9.avif" },
      { name: "manuel", image: "/cast/manuel-368b4300-7fc3-11ed-af72-ef9f24d260fa.avif" },
      { name: "Mahershala", image: "/cast/Mahershala-Ali.avif" },
      { name: "Luna-Blaise", image: "/cast/Luna-Blaise-c68bed30-b7b4-11ef-b2e6-3b922ebbcf80.avif" },
      { name: "Jonathan-Bailey", image: "/cast/Jonathan-Bailey-5d082f80-a7ed-11ef-8bec-85ca743197e0.avif" },
      { name: "Jonathan-Bailey", image: "/cast/Ed-Skrein-151e5894-16f0-4e0a-9aad-eef59fb90ae3.avif" },
    ],
    trailer: "https://youtu.be/qeRu9_0F3F4",
    genres: "Action ,Advancher, Sic-fi ,Thireller,",
    posters: ["/images/Jurrasic2.avif", "/images/poster4.jpg"]
  },
  9: {
    synopsis: "Set in the backdrop of a gold smuggling syndicate, the story follows a man driven by a burning desire for vengeance and a desire to right the wrongs of his past.",
    cast: [
      { name: "Rajinikanth", image: "/images/rajinikanth.jpg" },
      { name: "Shruti Hassan", image: "/images/shruti-hassan.jpg" },
      { name: "Sathyaraj", image: "/images/sathyaraj.jpg" }
    ],
    trailer: "/trailers/coolie-trailer.mp4", // Path to the trailer
    genres: "Action, Thriller",  // Genres of the movie
    posters: ["/images/poster1.jpg", "/images/poster2.jpg"]  // Paths to posters
  },
  
  10: {
    synopsis: "A gripping story about a political revolution set in a war-torn country.",
    cast: [
      { name: "Actor A", image: "/images/actor-a.jpg" },
      { name: "Actor B", image: "/images/actor-b.jpg" }
    ],
    trailer: "/trailers/revolution-trailer.mp4",
    genres: "Drama, War",
    posters: ["/images/poster3.jpg", "/images/poster4.jpg"]
  },
  11: {
    synopsis: "A gripping story about a political revolution set in a war-torn country.",
    cast: [
      { name: "Actor A", image: "/images/actor-a.jpg" },
      { name: "Actor B", image: "/images/actor-b.jpg" }
    ],
    trailer: "/trailers/revolution-trailer.mp4",
    genres: "Drama, War",
    posters: ["/images/poster3.jpg", "/images/poster4.jpg"]
  },
  12: {
    synopsis: "A gripping story about a political revolution set in a war-torn country.",
    cast: [
      { name: "Actor A", image: "/images/actor-a.jpg" },
      { name: "Actor B", image: "/images/actor-b.jpg" }
    ],
    trailer: "/trailers/revolution-trailer.mp4",
    genres: "Drama, War",
    posters: ["/images/poster3.jpg", "/images/poster4.jpg"]
  },
  13: {
    synopsis: "Set in the backdrop of a gold smuggling syndicate, the story follows a man driven by a burning desire for vengeance and a desire to right the wrongs of his past.",
    cast: [
      { name: "Rajinikanth", image: "/images/rajinikanth.jpg" },
      { name: "Shruti Hassan", image: "/images/shruti-hassan.jpg" },
      { name: "Sathyaraj", image: "/images/sathyaraj.jpg" }
    ],
    trailer: "/trailers/coolie-trailer.mp4", // Path to the trailer
    genres: "Action, Thriller",  // Genres of the movie
    posters: ["/images/poster1.jpg", "/images/poster2.jpg"]  // Paths to posters
  },
  
  14: {
    synopsis: "A gripping story about a political revolution set in a war-torn country.",
    cast: [
      { name: "Actor A", image: "/images/actor-a.jpg" },
      { name: "Actor B", image: "/images/actor-b.jpg" }
    ],
    trailer: "/trailers/revolution-trailer.mp4",
    genres: "Drama, War",
    posters: ["/images/poster3.jpg", "/images/poster4.jpg"]
  },
  15: {
    synopsis: "A gripping story about a political revolution set in a war-torn country.",
    cast: [
      { name: "Actor A", image: "/images/actor-a.jpg" },
      { name: "Actor B", image: "/images/actor-b.jpg" },
      { name: "Actor c", image: "/images/actor-b.jpg" }
    ],
    trailer: "/trailers/revolution-trailer.mp4",
    genres: "Drama, War",
    posters: ["/images/poster3.jpg", "/images/poster4.jpg"]
  },
  16: {
    synopsis: "A gripping story about a political revolution set in a war-torn country.",
    cast: [
      { name: "Actor A", image: "/images/actor-a.jpg" },
      { name: "Actor B", image: "/images/actor-b.jpg" }
    ],
    trailer: "/trailers/revolution-trailer.mp4",
    genres: "Drama, War",
    posters: ["/images/poster3.jpg", "/images/poster4.jpg"]
  },
  17: {
    synopsis: "A gripping story about a political revolution set in a war-torn country.",
    cast: [
      { name: "Actor A", image: "/images/actor-a.jpg" },
      { name: "Actor B", image: "/images/actor-b.jpg" }
    ],
    trailer: "/trailers/revolution-trailer.mp4",
    genres: "Drama, War",
    posters: ["/images/poster3.jpg", "/images/poster4.jpg"]
  },
  18: {
    synopsis: "A gripping story about a political revolution set in a war-torn country.",
    cast: [
      { name: "Actor A", image: "/images/actor-a.jpg" },
      { name: "Actor B", image: "/images/actor-b.jpg" }
    ],
    trailer: "/trailers/revolution-trailer.mp4",
    genres: "Drama, War",
    posters: ["/images/poster3.jpg", "/images/poster4.jpg"]
  },
  19: {
    synopsis: "A gripping story about a political revolution set in a war-torn country.",
    cast: [
      { name: "Actor A", image: "/images/actor-a.jpg" },
      { name: "Actor B", image: "/images/actor-b.jpg" }
    ],
    trailer: "/trailers/revolution-trailer.mp4",
    genres: "Drama, War",
    posters: ["/images/poster3.jpg", "/images/poster4.jpg"]
  },
  20: {
    synopsis: "A gripping story about a political revolution set in a war-torn country.",
    cast: [
      { name: "Actor A", image: "/images/actor-a.jpg" },
      { name: "Actor B", image: "/images/actor-b.jpg" }
    ],
    trailer: "/trailers/revolution-trailer.mp4",
    genres: "Drama, War",
    posters: ["/images/poster3.jpg", "/images/poster4.jpg"]
  },
  
  // More movie details can be added similarly...
};

// Store the movie details data in localStorage
localStorage.setItem('movieDetails', JSON.stringify(movieDetails));

// utils/castStore.js

// Function to get movie details from localStorage
export const getMovieDetails = () => {
  const movieDetails = localStorage.getItem('movieDetails');  // Get the data from localStorage
  return movieDetails ? JSON.parse(movieDetails) : {};        // Parse and return movie details, or empty object if not found
};
