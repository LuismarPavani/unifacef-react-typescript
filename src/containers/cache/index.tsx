import * as React from 'react';

import { Button, Container, Form, Grid, Header } from 'semantic-ui-react';
import { inject, observer } from 'mobx-react';

import CacheStore from './store';
import NewRouterStore from '../../mobx/router.store';

interface Props {
  router: NewRouterStore;
  cache: CacheStore;
}

@inject('router', 'cache')
@observer
export default class Cache extends React.Component<Props> {

  componentDidMount() {
    const { loadForm } = this.props.cache;
    loadForm();
  }
  render() {

    const { local, session, cookie, handleForm, indexDb, submit, indexed } = this.props.cache;

    const submitForm = (e) => {
      e.preventDefault();
      submit();
    }

    return (
      <Container>
        <Grid divided='vertically'>
          <Grid.Row columns={2}>
            <Grid.Column>
              <Header color='blue' as='h2'>
                <Header.Content>
                  Cache
                 <Header.Subheader>Local Storage / Session Storage / Cookies</Header.Subheader>
                </Header.Content>
              </Header>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Form onSubmit={submitForm}>
          <Form.Group widths='equal'>
            <Form.Field>
              <label>Local Storage</label>
              <input value={local || ''} name='local' onChange={handleForm} placeholder='Uva' />
            </Form.Field>
            <Form.Field>
              <label>Session Storage</label>
              <input value={session || ''} name='session' onChange={handleForm} placeholder='Maça' />
            </Form.Field>
            <Form.Field>
              <label>Cookie</label>
              <input value={cookie || ''} name='cookie' onChange={handleForm} placeholder='Laranja' />
            </Form.Field>
          </Form.Group>
          <Button type='submit'>Armazenar</Button>
        </Form>
        <Form.Group widths='equal'>
          <Form.Field>
            <pre>{indexed}</pre>
          </Form.Field>
          <Button onClick={() => indexDb()}>Indexed DB</Button>
        </Form.Group>
      </Container>
    );
  }
}
