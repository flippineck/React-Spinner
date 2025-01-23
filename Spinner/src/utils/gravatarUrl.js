import md5 from "md5";

export function GravatarURL({ Email, size = 128 }) {
  const hash = md5(Email);
  return `https://www.gravatar.com/avatar/${hash}?d=robohash&s=${size}`;
  
}