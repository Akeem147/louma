interface TicketType {
  id: number;
  name: string;
  price: number;
}

interface Event {
  id: number;
  title: string;
  date: string;
  description: string;
  price: number;
  image: string;
  ticketTypes: TicketType[];
}

export const events: Event[] = [
  {
    id: 1,
    title: "Concert Night",
    date: "2024-11-01",
    description: "An amazing night filled with live performances and music.",
    price: 60,
    image:
      "https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    ticketTypes: [
      { id: 1, name: "General Admission", price: 60 },
      { id: 2, name: "VIP", price: 120 },
    ],
  },
  {
    id: 2,
    title: "Art Exhibition",
    date: "2024-11-02",
    description: "Explore breathtaking art from around the world.",
    price: 40,
    image:
      "https://images.pexels.com/photos/3573382/pexels-photo-3573382.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    ticketTypes: [
      { id: 1, name: "Standard", price: 40 },
      { id: 2, name: "VIP", price: 80 },
    ],
  },
  {
    id: 3,
    title: "Tech Conference",
    date: "2024-11-03",
    description:
      "Join industry experts and tech enthusiasts at this premier conference.",
    price: 80,
    image:
      "https://images.pexels.com/photos/3184324/pexels-photo-3184324.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    ticketTypes: [
      { id: 1, name: "General Admission", price: 80 },
      { id: 2, name: "Student", price: 50 },
    ],
  },
  {
    id: 4,
    title: "Food Festival",
    date: "2024-11-04",
    description:
      "A festival celebrating the best of local and international cuisine.",
    price: 30,
    image:
      "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    ticketTypes: [
      { id: 1, name: "Entry", price: 30 },
      { id: 2, name: "All Access", price: 70 },
    ],
  },
  {
    id: 5,
    title: "Comedy Show",
    date: "2024-11-05",
    description: "Laugh your heart out with the best comedians in town.",
    price: 70,
    image:
      "https://images.pexels.com/photos/1571141/pexels-photo-1571141.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    ticketTypes: [
      { id: 1, name: "Standard", price: 50 },
      { id: 2, name: "Premium", price: 100 },
    ],
  },
  {
    id: 6,
    title: "Charity Gala",
    date: "2024-11-06",
    description: "A prestigious gala event supporting a noble cause.",
    price: 90,
    image:
      "https://images.pexels.com/photos/3186654/pexels-photo-3186654.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    ticketTypes: [
      { id: 1, name: "General Admission", price: 100 },
      { id: 2, name: "VIP", price: 200 },
    ],
  },
  {
    id: 7,
    title: "Yoga Workshop",
    date: "2024-11-07",
    description: "A day of mindfulness and relaxation with expert instructors.",
    price: 35,
    image:
      "https://images.pexels.com/photos/3820345/pexels-photo-3820345.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    ticketTypes: [{ id: 1, name: "Workshop Access", price: 25 }],
  },
  {
    id: 8,
    title: "Jazz Night",
    date: "2024-11-08",
    description: "An evening of smooth jazz with live performances.",
    price: 45,
    image:
      "https://images.pexels.com/photos/1674754/pexels-photo-1674754.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    ticketTypes: [
      { id: 1, name: "Standard", price: 45 },
      { id: 2, name: "VIP", price: 90 },
    ],
  },
];
