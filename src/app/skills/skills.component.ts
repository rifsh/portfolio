import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  frontEndSkills: string[] = ["HTML", "CSS", "Tailwind", "Bootstrap", "SCSS", "Angular", "JavaScript", "TypeScript", "Material UI"]
  backEndSkills: string[] = ["Node js", "Express", "Git", "MonogDB", "MySQL", "Docker","AWS","MVC","Microservice"]
}
