const theaters = [
  {
    id: 1,
    name: "Kamala Cinemas 4K RGB Laser",
    city: "Mumbai",
    location: "Vadapalani, Chennai",
    logo: "/theaters/kamala-logo.png",
    distance: "13.4 km away",
    cancellable: false,
    screens: [
      {
        name: "SCREEN1",
        showtimes: ["10:45 PM", "12:45 PM"],
      },
    ],
  },
  {
    id: 2,
    name: "INOX Varun Beach",
    city: "Chennai",
    location: "Beach Road, Chennai",
    logo: "/theaters/inox-circle 2-27a89af0-a41e-11ef-8d2a-13243c787688.avif",
    distance: "5.2 km away",
    cancellable: true,
    screens: [
      {
        name: "SCREEN1",
        showtimes: ["10:00 AM", "1:30 PM", "6:00 PM", "9:30 PM"],
      },
      {
        name: "SCREEN2",
        showtimes: ["11:00 AM", "2:45 PM", "7:15 PM"],
      },
    ],
  },
  {
    id: 3,
    name: "PVR CMR Central",
    city: "Chennai",
    location: "Maddilapalem, chennai",
    logo: "/theaters/PVR circle new-e63c67e0-a41d-11ef-8d2a-13243c787688.avif",
    distance: "8.1 km away",
    cancellable: true,
    screens: [
      {
        name: "SCREEN1",
        showtimes: ["9:45 AM", "1:00 PM", "4:30 PM", "8:15 PM"],
      },
      {
        name: "SCREEN2",
        showtimes: ["12:00 PM", "3:45 PM", "7:30 PM"],
      },
    ],
  },
  {
    id: 4,
    name: "PVR Goa Central",
    city: "Goa",
    location: "Panaji, Goa",
    logo: "/theaters/PVR circle new-e63c67e0-a41d-11ef-8d2a-13243c787688.avif",
    distance: "6.4 km away",
    cancellable: true,
    screens: [
      {
        name: "SCREEN1",
        showtimes: ["10:00 AM", "1:15 PM", "4:45 PM"],
      },
      {
        name: "SCREEN2",
        showtimes: ["12:30 PM", "3:30 PM", "7:00 PM"],
      },
    ],
  },
  {
    id: 5,
    name: "PVR Goa Central",
    city: "Goa",
    location: "Panaji, Goa",
    logo: "/theaters/PVR circle new-e63c67e0-a41d-11ef-8d2a-13243c787688.avif",
    distance: "6.4 km away",
    cancellable: true,
    screens: [
      {
        name: "SCREEN1",
        showtimes: ["10:00 AM", "1:15 PM", "4:45 PM"],
      },
      {
        name: "SCREEN2",
        showtimes: ["12:30 PM", "3:30 PM", "7:00 PM"],
      },
    ],
  },
];

export default theaters;


localStorage.setItem("theaters", JSON.stringify(theaters));
