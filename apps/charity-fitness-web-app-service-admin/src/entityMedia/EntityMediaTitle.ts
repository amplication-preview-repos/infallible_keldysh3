import { EntityMedia as TEntityMedia } from "../api/entityMedia/EntityMedia";

export const ENTITYMEDIA_TITLE_FIELD = "mediaUrl";

export const EntityMediaTitle = (record: TEntityMedia): string => {
  return record.mediaUrl?.toString() || String(record.id);
};
