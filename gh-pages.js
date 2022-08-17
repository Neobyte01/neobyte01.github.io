import { publish } from 'gh-pages';

publish(
    'dist', 
    {
        branch: 'gh-pages',
        repo: 'https://github.com/Neobyte01/neobyte01.github.io.git', // Update to point to your repository  
        user: {
            name: 'Neobyte01',
            email: 'neobyte01@gmail.com'
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)