import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  
  ngOnInit(): void {
    
  }



  downloadResume() {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/file/d/18V8oRqnVQsFix-tolSW_wXLOeG1WM04V/view?usp=drive_link'; // Adjust the path to your resume file
    link.download = 'Rifash_Muhammed_Resume.pdf'; // The name of the downloaded file
    link.click();
  }
}
