import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ServicesComponent } from '../services/services.component';
import { Router } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { SkillsComponent } from '../skills/skills.component';
import { ProjectsComponent } from '../projects/projects.component';
import { animate, state, style, transition, trigger } from '@angular/animations';
interface NavData {
  label: string,
  path: string
}
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, ProjectsComponent, RouterLinkActive, HomeComponent, ServicesComponent, AboutComponent, RouterOutlet, SkillsComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  animations: [
    trigger('toggleAnimation', [
      state('void', style({
        opacity: 0,
        transform: 'translateY(-20px)'
      })),
      state('*', style({
        opacity: 1,
        transform: 'translateY(0)'
      })),
      transition('void <=> *', [
        animate('0.3s ease-in-out')
      ])
    ]),
    [
      trigger('fadeIn', [
        state('void', style({
          opacity: 0
        })),
        transition(':enter', [
          animate('1s', style({
            opacity: 1
          }))
        ])
      ])
    ]
  ],
})
export class HeaderComponent implements OnInit {
  navOptions: NavData[] = [
    {
      label: "Home",
      path: "/home"
    },
    {
      label: "About",
      path: "/about"
    },
    {
      label: "Skills",
      path: "/skills"
    },
    {
      label: "Projects",
      path: "/projects"
    },
    {
      label: "Services",
      path: "/services"
    },
    {
      label: "Contact",
      path: "/contact"
    },
  ]
  phoneMenu: boolean = false;

  constructor(private route: Router) { }

  ngOnInit(): void {

  }

  scrollTo(section: string) {
    this.route.navigate([section]).then(() => {
      const element = document.querySelector(`#${section.slice(1, section.length)}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    })
  }

  openPhoneMenu() {
    this.phoneMenu = !this.phoneMenu;
  }
}
