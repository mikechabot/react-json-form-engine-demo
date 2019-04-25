import React from 'react';
import PropTypes from 'prop-types';

import { CodePanel, Flex } from './components/common';

const AppPanels = ({ instance, form }) => {
    if (instance.isValidDefinition()) {
        return (
            <Flex flex={1} column={true} overflow="hidden">
                <Flex flexShrink={1} overflow="hidden" className="m-bottom--x-small" minWidth={300}>
                    <CodePanel
                        icon="database"
                        title="Model"
                        content={{ model: instance.getModelAsArray() }}
                        height={350}
                    />
                    <CodePanel height={350} icon="map-marker" title="UI Decorators" content={form.decorators} />
                </Flex>
                <Flex flex={1} flexShrink={0} overflow="hidden" minWidth={300}>
                    <CodePanel icon="map" title="JSON Schema" content={{ sections: form.sections }} />
                </Flex>
            </Flex>
        );
    }
};

AppPanels.propTypes = {
    instance: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired
};

export default AppPanels;
