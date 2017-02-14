import {Component} from 'angular2/core';

@Component ({
    selector: 'footer-component',
    template: `
        <footer class="footer">
            <div class="container">
                <a class="text-muted" href="/">Esteban Castro, {{year}}</a>
                <a class="text-muted" href="https://twitter.com/estebancasful" target="_blank"><li class="fa fa-twitter"></li> @estebancasful</a>
                <a class="text-muted" href="https://www.linkedin.com/in/esteban-castro-cordero-928784137/" target="_blank"><li class="fa fa-linkedin"></li>LinkedIn </a>
            </div>
        </footer>
    `,
    styles : [`
        footer {
            position: absolute;
            bottom: 0;
            width: 100%;
            height: 60px;
            background-color: #f5f5f5;
        }

        .container {
            height : 60px;
        }

        a {
            height : 60px;
            line-height : 60px;
            margin-right : 5rem;
        }
    
    
    `]

})

export class FooterComponent {
    private year : number = (new Date()).getFullYear();
}