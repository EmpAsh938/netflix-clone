import { useState } from 'react'
import { Link as ReactRouterLink } from 'react-router-dom'
import {
    Background,
    Frame,
    Logo,
    ButtonLink,
    Feature,
    Title,
    SubTitle,
    Container,
    Text,
    ContainerTitle,
    PlayButton,
    Group,
    Picture,
    TextLink,
    Dropdown,
    Profile,
    Search,
    SearchIcon,
    SearchInput
} from './styles/header'

export default function Header({ children, ...restProps }) {
    return (
    <Background {...restProps}>{children}</Background>
    )
}

// Browse Start
Header.Container = function HeaderContainer({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Header.ContainerTitle = function HeaderContainerTitle({ children, ...restProps }) {
    return <ContainerTitle {...restProps}>{children}</ContainerTitle>
}

Header.Group = function HeaderGroup({ children, ...restProps }) {
    return <Group {...restProps}>{children}</Group>;
  };
 
Header.Text = function HeaderText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>
}

Header.PlayButton = function HeadPlayButton({ children, ...restProps }) {
    return <PlayButton {...restProps}>{children}</PlayButton>
}

Header.Picture = function HeaderPicture({ src, ...restProps }) {
    return <Picture src={`/images/users/${src}.png`} {...restProps}/>
}

Header.TextLink = function HeaderTextLink({ children, ...restProps }) {
    return <TextLink {...restProps}>{children}</TextLink>
}

Header.Dropdown = function HeaderDropdown({ children, ...restProps }) {
  return <Dropdown {...restProps}>{children}</Dropdown>;
};

Header.Profile = function HeaderProfile({ children, ...restProps }) {
  return <Profile {...restProps}>{children}</Profile>;
};

Header.Search = function HeaderSearch({ searchTerm, setSearchTerm, ...restProps }) {
  const [searchActive, setSearchActive] = useState(false);

  return (
    <Search {...restProps}>
      <SearchIcon onClick={() => setSearchActive((searchActive) => !searchActive)} data-testid="search-click">
        <img src="/images/icons/search.png" alt="Search" />
      </SearchIcon>
      <SearchInput
        value={searchTerm}
        onChange={({ target }) => setSearchTerm(target.value)}
        placeholder="Search films and series"
        active={searchActive}
        data-testid="search-input"
      />
    </Search>
  );
};

//Browse End

Header.Frame = function HeaderFrame({ children, ...restProps }) {
    return (
    <Frame {...restProps}>{children}</Frame>
    )
}
Header.Logo = function HeaderLogo({ to, ...restProps }) {
    return (
        <ReactRouterLink to={to}>
            <Logo {...restProps} />
        </ReactRouterLink>
    )
}
Header.ButtonLink = function HeaderButtonLink({to, children, ...restProps }) {
    return (
    <ButtonLink to={to} {...restProps}>{children}</ButtonLink>
    )
}
Header.Frame = function HeaderFrame({ children, ...restProps }) {
    return (
    <Frame {...restProps}>{children}</Frame>
    )
}

Header.Feature = function HeaderFeature({ children, ...restProps }) {
    return (
    <Feature {...restProps}>{children}</Feature>
    )
}

Header.Title = function HeaderTitle({ children, ...restProps }) {
    return (
    <Title {...restProps}>{children}</Title>
    )
}

Header.SubTitle = function HeaderSubTitle({ children, ...restProps }) {
    return (
    <SubTitle {...restProps}>{children}</SubTitle>
    )
}