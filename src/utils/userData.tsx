export interface User {
  id: number;
  name: string;
  role: "student" | "teacher";
  faculty: string;
  fatherName: string;
  phone: string;
  email: string;
  image: string;
}

export const generateUsers = (): User[] => {
  return [...Array(20)].map((_, index) => ({
    id: index + 1,
    name: `User ${index + 1}`,
    role: index % 2 === 0 ? "student" : "teacher",
    faculty: `Management ${index + 1}`,
    fatherName: `Father ${index + 1}`,
    phone: `98072695${index + 10}`,
    email: `user${index + 1}@example.com`,
    image: `https://randomuser.me/api/portraits/men/${index + 1}.jpg`,
  }));
};
