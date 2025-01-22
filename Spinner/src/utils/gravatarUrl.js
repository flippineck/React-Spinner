import md5 from "md5";

export function GravatarURL({ teamMember }) {
  const hash = md5(teamMember.Email);
  return `https://www.gravatar.com/avatar/${hash}?d=robohash&s=128`;
  
}