import { CommonModule } from '@angular/common';
import { Component, ElementRef, Renderer2 } from '@angular/core';
@Component({
  selector: 'app-profile-side-bar',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './profile-side-bar.component.html',
  styleUrl: './profile-side-bar.component.scss'
})
export class ProfileSideBarComponent {
  items = [
    { name: 'Timesheet Management', icon: 'fa-regular fa-calendar-days', children: ['Approvals', 'Reporting', 'Matrix View'], showNested: false, hasNested: true },
    { name: 'HR Requests', icon: 'fa-solid fa-briefcase', children: ['Appraisal Request', 'Approval Request', 'Leave Request'], showNested: false, hasNested: true },
    { name: 'Data Management', icon: 'fa-solid fa-database', children: ['Data architecture', 'Data modeling'], showNested: false, hasNested: true },
    { name: 'Technical Management', icon: 'fa-solid fa-hammer', children: ['Project management', 'Security management', 'Application management'], showNested: false, hasNested: true },
  ];

  selectedItem: number | null = null;
  selectedchild: number | null = null;


  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  toggleNestedList(item: any, index: number) {
    this.selectedItem = null;
    this.selectedchild = null;
    item.showNested = !item.showNested;
    if (item.showNested)
      this.selectItem(index);
    
  }

  selectItem(index: number) {
    this.selectedItem = index;
  }
  selectChild(i:number,index: number) {
    this.items[i].showNested= true;
    this.selectItem(i)
    this.selectedchild = index;
  }

  checkAndRemoveClass() {
    const elements = document.getElementsByClassName("item");
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];
      if (element.classList.contains("clickable")) {
        element.classList.remove("clickable");
      }
    }
  }
  closeSideNav(){
    document.querySelector('.side-nav')?.classList.remove('active')
    document.querySelector('.overlay')?.classList.remove('active')
  }

}
