import md5 from "md5";

export function GravatarURL({ teamMember, size = 128 }) {
  const hash = md5(teamMember.Email);
  return `https://www.gravatar.com/avatar/${hash}?d=robohash&s=${size}`;
  
}