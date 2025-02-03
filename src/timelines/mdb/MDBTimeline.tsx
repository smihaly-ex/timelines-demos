import {
  MDBBtn,
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";

export const MDBTimeline = () => {
  return (
    <MDBContainer fluid className="py-5">
      <MDBRow>
        <MDBCol lg="12">
          <div className="horizontal-timeline">
            <MDBTypography listInLine className="items">
              <li className="items-list">
                <div className="px-4">
                  <div className="event-date badge bg-danger">7 June</div>
                  <h5 className="pt-2">Event Three</h5>
                  <p className="text-muted">
                    If several languages coalesce the grammar of the resulting
                    simple and regular
                  </p>
                  <div>
                    <MDBBtn href="#!" size="sm">
                      Read more
                    </MDBBtn>
                  </div>
                </div>
              </li>
              <li className="items-list">
                <div className="px-4">
                  <div className="event-date badge bg-warning">8 June</div>
                  <h5 className="pt-2">Event Four</h5>
                  <p className="text-muted">
                    Languages only differ in their pronunciation and their most
                    common words.
                  </p>
                  <div>
                    <MDBBtn href="#!" size="sm">
                      Read more
                    </MDBBtn>
                  </div>
                </div>
              </li>
              <li className="items-list">
                <div className="px-4">
                  <div className="event-date badge bg-danger">9 June</div>
                  <h5 className="pt-2">Event Three</h5>
                  <p className="text-muted">
                    If several languages coalesce the grammar of the resulting
                    simple and regular
                  </p>
                  <div>
                    <MDBBtn href="#!" size="sm">
                      Read more
                    </MDBBtn>
                  </div>
                </div>
              </li>
              <li className="items-list">
                <div className="px-4">
                  <div className="event-date badge bg-danger">10 August</div>
                  <h5 className="pt-2">Event Three</h5>
                  <p className="text-muted">
                    If several languages coalesce the grammar of the resulting
                    simple and regular
                  </p>
                  <div>
                    <MDBBtn href="#!" size="sm">
                      Read more
                    </MDBBtn>
                  </div>
                </div>
              </li>
            </MDBTypography>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}