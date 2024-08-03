import { Routes } from '@angular/router';
import { ServicesComponent } from './services/services.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';

export const routes: Routes = [
    { path: "", redirectTo: 'home', pathMatch: 'full' },
    { path: "home", component: HomeComponent },
    { path: "about", component: AboutComponent },
    { path: "skills", component: SkillsComponent },
    { path: "projects", component: ProjectsComponent },
    { path: "services", component: ServicesComponent },
    { path: "contact", component: ContactComponent }
];
