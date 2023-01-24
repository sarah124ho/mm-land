export default interface ResponseDTO {
    errors: Array<string>;
    result_count: number;
    result: any;
}

export interface BaseResponseDTO<T> {
    errors: Array<string>;
    result_count: number;
    result: T;
}