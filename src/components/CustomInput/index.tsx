import * as S from './styles'
import { CustomInputProps } from './types'

export function CustomInput(props: CustomInputProps) {
  const { ...attrs } = props
  return <S.Container {...attrs} />
}
