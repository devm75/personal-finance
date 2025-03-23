import styled from 'styled-components';

export const Flex = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || 'row'};
  gap: ${(props) => props.gap || '16px'};
`;

export const Text = styled.p`
  font-size: ${(props) => props.size || props.theme.typography.preset1.fontSize.base};
  color: ${(props) => props.color || '#000'};
`;
