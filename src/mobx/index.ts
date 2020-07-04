import { cache } from '../containers/cache/store';
import { combustivel } from '../containers/combustivel/store';
import { home } from '../containers/home/store';
import { register } from '../containers/register/store';
import { router } from './router.store';
import { starWars } from '../containers/star-wars/store';
import { starWarsDetails } from '../containers/star-wars-details/store';
import { tags } from '../containers/tags/store';

export {
  router,
  combustivel,
  home, 
  starWars,
  starWarsDetails,
  cache,
  tags,
  register
}
