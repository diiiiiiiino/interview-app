
/**
 * @param T data 필드 타입
 */
export interface Response<T> {
  /** 결과 메시지 */
  status: string;

  /** 데이터 */
  data?: T;

  /** 페이징 */
  paging?: PagedListMeta;
}


/** 리스트 페이지 정보 */
export interface PagedListMeta {
  /** 현재 오프셋 */
  offset: number;
  /** 페이지 사이즈 */
  size: number;
  /** 전체 레코드 수 */
  total: number;
}


/** 데이터가 없는 응답 */
export type StatusResponse = Omit<Response<undefined>, 'data'>;

/**
 * 리스트 응답
 */
export interface ListResponse<T> extends Response<T> {
  paging: PagedListMeta;
}
