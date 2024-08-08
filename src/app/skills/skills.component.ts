import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
interface Skill {
  skill: string;
  image: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  // frontEndSkills: Skill[] = ["HTML", "CSS", "Tailwind", "Bootstrap", "SCSS", "Angular", "JavaScript", "TypeScript", "Material UI"];
  frontEndSkills: Skill[] = [
    { skill: "HTML", image: "../../assets/Skills/html-icon.webp" },
    { skill: "CSS", image: "../../assets/Skills/css-icon.webp" },
    { skill: "Tailwind", image: "../../assets/Skills/tailwind-css-icon.webp" },
    { skill: "Bootstrap", image: "../../assets/Skills/bootstrap-5-logo-icon.webp" },
    { skill: "SCSS", image: "../../assets/Skills/sass-icon.png" },
    { skill: "Angular", image: "../../assets/Skills/angular-icon.webp" },
    { skill: "JavaScript", image: "../../assets/Skills/javascript-programming-language-icon.webp" },
    { skill: "TypeScript", image: "../../assets/Skills/typescript-programming-language-icon.webp" },

  ];
  // backEndSkills: string[] = ["Node js", "Express", "Git", "MonogDB", "MySQL", "Docker", "AWS", "MVC", "Microservice"]
  backEndSkills: Skill[] = [
    { skill: "Node js", image: "../../assets/Skills/node-js-icon.webp" },
    { skill: "Express", image: "../../assets/Skills/express.png" },
    { skill: "Git", image: "../../assets/Skills/git-icon.webp" },
    { skill: "MonogDB", image: "../../assets/Skills/mongodb-icon.webp" },
    { skill: "MySQL", image: "../../assets/Skills/mysql-icon.webp" },
    { skill: "Docker", image: "../../assets/Skills/docker-icon.webp" },
  ]
}
