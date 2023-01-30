export interface PoundIconProps {
  scale?: number;
  id?: string;
  backgroundColor?: string;
  poundColor?: string;
}

export const PoundIcon = ({
  scale = 1,
  id,
  backgroundColor = "black",
  poundColor = "white",
}: PoundIconProps) => {
  return (
    <div id={id}>
      <svg
        width={`${12 * scale}`}
        height={`${12 * scale}`}
        viewBox="0 0 12 12"
        fill={poundColor}
        xmlns="http://www.w3.org/2000/svg">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12ZM8.4768 8.688V9.408H3.6V8.496C4.176 8.3904 4.6368 8.0736 4.6368 6.4224H3.696V5.7024H4.656V4.3008C4.656 3.1872 5.4336 2.4 6.5184 2.4C7.632 2.4 8.4288 3.264 8.496 4.4448H7.7184C7.68 3.6576 7.1808 3.0912 6.528 3.0912C5.8944 3.0912 5.4816 3.6 5.4816 4.3008V5.7024H7.8624V6.4224H5.4432C5.3856 7.9104 4.9728 8.3232 4.416 8.592V8.688H8.4768Z"
          fill={backgroundColor}
        />
      </svg>
    </div>
  );
};
