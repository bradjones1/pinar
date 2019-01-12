import { PureComponent } from "react";
import { ScrollViewProps, StyleProp, TextStyle, ViewStyle } from "react-native";

interface CustomScrollViewProps {
  horizontal: ScrollViewProps["horizontal"];
  pagingEnabled: ScrollViewProps["pagingEnabled"];
  showsHorizontalScrollIndicator: ScrollViewProps["showsHorizontalScrollIndicator"];
  showsVerticalScrollIndicator: ScrollViewProps["showsVerticalScrollIndicator"];
  bounces: ScrollViewProps["bounces"];
  scrollsToTop: ScrollViewProps["scrollsToTop"];
  removeClippedSubviews: ScrollViewProps["removeClippedSubviews"];
  automaticallyAdjustContentInsets: ScrollViewProps["automaticallyAdjustContentInsets"];
  scrollEventThrottle: ScrollViewProps["scrollEventThrottle"];
  scrollEnabled: ScrollViewProps["scrollEnabled"];
}

interface RenderDotsParams {
  index: number;
  total: number;
  context: any;
}

interface RenderNextParams {
  scrollToNext: () => void;
}

interface RenderPrevParams {
  scrollToPrev: () => void;
}

interface OnIndexChangedParams {
  index: number;
  total: number;
}

export interface ScrollByOptions {
  index: number;
  animated?: boolean;
}

interface CustomRenderProps {
  renderDots?: (params: RenderDotsParams) => JSX.Element;
  renderDot?: () => JSX.Element;
  renderActiveDot?: () => JSX.Element;
  renderControls?: () => JSX.Element;
  renderNextButton?: (params: RenderNextParams) => JSX.Element;
  renderPrevButton?: (params: RenderPrevParams) => JSX.Element;
}

interface CustomStyleProps {
  controlsContainerStyle?: StyleProp<ViewStyle>;
  dotsContainerStyle?: StyleProp<ViewStyle>;
  dotStyle?: StyleProp<ViewStyle>;
  activeDotStyle?: StyleProp<ViewStyle>;
  controlsTextStyle?: StyleProp<TextStyle>;
}

interface CallbackProps {
  onIndexChanged?: (params: OnIndexChangedParams) => void;
}

export interface Props
  extends CustomScrollViewProps,
    CustomRenderProps,
    CustomStyleProps,
    CallbackProps {
  showsDots: boolean;
  showsControls: boolean;
  height?: number;
  width?: number;
  index: number;
  loop?: boolean;
  autoplay: boolean;
  autoplayInterval: number;
  accessibility: boolean;
  accessibilityLabelPrev: string;
  accessibilityLabelNext: string;
  children: JSX.Element | JSX.Element[];
}

export interface State {
  activePageIndex: number;
  width: number;
  height: number;
  total: number;
  offset: {
    x: number;
    y: number;
  };
}

declare module "pinar" {
  export default class Pinar extends PureComponent<Props, State> {
    public scrollBy(options: ScrollByOptions): void;
    public scrollTo(options: { x: number; y: number; animated: boolean }): void;
  }
}
