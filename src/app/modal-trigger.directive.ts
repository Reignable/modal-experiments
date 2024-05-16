import { Directive, HostListener, inject } from '@angular/core'
import { ModalComponent } from './modal/modal.component'

@Directive({
  selector: '[appModalTrigger]',
  standalone: true,
})
export class ModalTriggerDirective {
  parentModal = inject(ModalComponent)

  @HostListener('click')
  onClick(): void {
    this.parentModal.openModal()
  }
}
