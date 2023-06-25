import moment from "moment/moment";

export const cardsData = [
  {
    title: "Revenue",
    change: 24,
    amount: 420567412,
  },
  {
    title: "Orders",
    change: -14,
    amount: 52125.03,
  },
  {
    title: "Expenses",
    change: 18,
    amount: 121647.5,
  },
  {
    title: "Profit",
    change: 12,
    amount: 1012577.0,
  },
];

export const ordersData = [
  {
    name: "DSA Course",
    type: "Illustration",
    items: 60,
    change: 17940,
  },
  {
    name: "Core Java",
    type: "Illustration",
    items: 12,
    change: 2388,
  },
  {
    name: "Dot Net",
    type: "Illustration",
    items: 7,
    change:1393,
  },
  {
    name: "Web Devlopement",
    type: "Illustration",
    items: 21,
    change: 2079,
  },
];

//* get the value in group number format
export const groupNumber = (number) => {
  return parseFloat(number.toFixed(2)).toLocaleString("en", {
    useGrouping: true,
  });
};

//* calendar Events
let eventGuid = 0;
let todayStr = moment().format("YYYY-MM-DD"); // YYYY-MM-DD of today
export const INITIAL_EVENTS = [
  {
    id: createEventId(),
    title: "Lunch Patry",
    start: todayStr + "T1:00:00",
  },
  {
    id: createEventId(),
    title: "Timed event",
    start: moment(todayStr).add(1, "days").format("YYYY-MM-DD") + "T16:00:00",
  },
  {
    id: createEventId(),
    title: "Head Meetup",
    start: moment(todayStr).add(2, "days").format("YYYY-MM-DD") + "T20:00:00",
  },
  {
    id: createEventId(),
    title: "VC Meeting",
    start: moment(todayStr).add(3, "days").format("YYYY-MM-DD") + "T09:00:00",
  },
  {
    id: createEventId(),
    title: "Payment Shedules",
    start: moment(todayStr).add(5, "days").format("YYYY-MM-DD") + "T13:00:00",
  },
  {
    id: createEventId(),
    title: "VC Meeting",
    start: moment(todayStr).add(6, "days").format("YYYY-MM-DD") + "T13:00:00",
  },
];

export function createEventId() {
  return String(eventGuid++);
}

// * tasks
export const boardData = {
  columns: [
    {
      id: 1,
      title: "Backlog",
      cards: [
        {
          id: 1,
          title: "Database Setup",
          description: "Firebase Integration",
        },
        {
          id: 2,
          title: "Data Flow",
          description: "Setup Diagram with other developers",
        },
      ],
    },
    {
      id: 2,
      title: "TODO",
      cards: [
        {
          id: 9,
          title: "Data Table Page",
          description: "Server side Pagination",
        },
      ],
    },
    {
      id: 3,
      title: "Doing",
      cards: [
        {
          id: 10,
          title: "Full Calendar Extension",
          description: "Make new events and store in global states",
        },
        {
          id: 11,
          title: "Custom Kanban Board",
          description:
            "Setup react-kanban dep within Dashboard as seperate page",
        },
      ],
    },
    {
      id: 4,
      title: "Completed",
      cards: [
        {
          id: 12,
          title: "Vite Server Setup",
          description: "Configure required modules and starters",
        },
        {
          id: 13,
          title: "Modular structre",
          description:
            "Write css in form of modules to reduce the naming conflicts",
        },
      ],
    },
  ],
};

// * user table data
export const userData = [
  {
    name: {
      firstName: "Rajveer",
      lastName: "Raj",
    },
    address: "Hinjewadi",
    city: "Pune",
    state: "MH",
  },
  {
    name: {
      firstName: "Ritika",
      lastName: "Rajan",
    },
    address: "Saket",
    city: "Delhi",
    state: "Delhi",
  },
  {
    name: {
      firstName: "Sorav",
      lastName: "Singh",
    },
    address: "Mahaveer Nagar",
    city: "Kota",
    state: "Rajasthan",
  },
  {
    name: {
      firstName: "Vandan",
      lastName: "Sharma",
    },
    address: "Koni",
    city: "Bilaspur",
    state: "CG",
  },
  {
    name: {
      firstName: "Joshua",
      lastName: "Rolluffs",
    },
    address: "32188 Larkin Turnpike",
    city: "Charleston",
    state: "South Carolina",
  },
  {
    name: {
      firstName: "Jane",
      lastName: "Doe",
    },
    address: "769 Dominic Grove",
    city: "Columbus",
    state: "Ohio",
  },
  {
    name: {
      firstName: "Joe",
      lastName: "Doe",
    },
    address: "566 Brakus Inlet",
    city: "South Linda",
    state: "West Virginia",
  },
  {
    name: {
      firstName: "Vandan",
      lastName: "Singh",
    },
    address: "Konifonia",
    city: "Boston",
    state: "Austin",
  },
 
  
];