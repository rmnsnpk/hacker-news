import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ROUTING_MAP } from 'src/app/core/constants/routing-map.constants';
import { MenuItem } from 'src/app/core/models/menu-item.model';

@Component({
  selector: 'hck-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent {
  public menuItems: MenuItem[] = [
    { name: 'Latest', link: ROUTING_MAP.Latest },
    { name: 'Past', link: ROUTING_MAP.Past },
    { name: 'Comments', link: ROUTING_MAP.Comments },
    { name: 'Ask', link: ROUTING_MAP.Ask },
    { name: 'Show', link: ROUTING_MAP.Show },
    { name: 'Jobs', link: ROUTING_MAP.Jobs },
    { name: 'Submit', link: ROUTING_MAP.Submit },
  ];
}
