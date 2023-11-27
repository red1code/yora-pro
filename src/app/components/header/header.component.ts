import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  showMobileMenu = false;

  toggleMobileMenuImg = () => this.showMobileMenu
    ? '../../../assets/close-menu.svg'
    : '../../../assets/align-justify.svg';
}
