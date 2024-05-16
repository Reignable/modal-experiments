import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalComponent {
  open = false
}
