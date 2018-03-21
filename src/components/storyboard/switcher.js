import React, { Component } from 'react';
import styled from 'styled-components';
import ListIcon from 'react-icons/lib/md/list';
import GridIcon from 'react-icons/lib/md/grid-on';
import { navigateTo } from 'gatsby-link';

const ButtonContainer = styled.div`
  display: flex;
`;

const StyledButton = styled.button`
  margin: 0;
  padding: 0.5rem 1rem;
  outline: none;
  border: none;

  background-color: ${props => (props.active ? 'black' : 'white')};
`;

const StyledIcon = Icon => styled(Icon)`
  color: red;
`;

const Button = ({ icon: IconComponent, active, ...rest }) => {
  const Icon = StyledIcon(IconComponent);
  return (
    <StyledButton active={active} {...rest}>
      <Icon />
    </StyledButton>
  );
};

export class StoryboardSwitcher extends Component {
  state = {
    active: 'list'
  };

  handleActiveChange = active => {
    return () => {
      navigateTo('/');
      this.setState({
        active
      });
    };
  };

  render() {
    return (
      <ButtonContainer>
        <Button
          active={this.state.active === 'list'}
          icon={ListIcon}
          onClick={this.handleActiveChange('list')}
        />
        <Button
          active={this.state.active === 'storyboard'}
          icon={GridIcon}
          onClick={this.handleActiveChange('storyboard')}
        />
      </ButtonContainer>
    );
  }
}
